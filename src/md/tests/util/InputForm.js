import React, {Component} from 'react';
import {validateSequence} from "../../../nist/tests/util/Validator";


class InputForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sequence: ""
        }
    }

    onClick = () =>{
        const params = this.normalize();
        this.setState({error:this.validator(params)})
        if(!this.validator(params)){

            fetch(`http://localhost:8080/md_test/${this.props.url}`, {
                method:"POST",
                mode: "cors",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({sequence:params})
            }).then((response) => response.json())
                .then((data) => this.props.update(data)).catch()
        }


    }
    normalize = () =>{
        let params = this.state.sequence
        params = params.replace(/\s/g, "")
        return params
    }


    onChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name] : value});
    }
    validator = (data) =>{
        return validateSequence(data);
    }

    render() {

        return (
                <>
                    {this.state.error &&
                    <>
                        <div className={"error"}>{this.state.error}</div>
                        <br/>
                    </>
                    }

                    <label>{"Бітова послідовність:"}</label>
                    <br />
                    <textarea name={"sequence"} value={this.state.sequence} onChange={this.onChange} placeholder={"Введіть послідовність. Приклад: 00100010111"}/>
                    <br/>
                    <button className={"test-button"} onClick={this.onClick}>Тест</button>
                </>
        );
    }
}
export default InputForm;