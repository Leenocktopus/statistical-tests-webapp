import React, {Component} from 'react';

import {validateSequence} from "../../nist/tests/util/Validator";
import {data} from "./util/MdData";

class AllMdForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tests:{
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false,
                eight: false
            },
            sequence: "",
            error: "",
            result: 0
        }

    }
    onChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    validator = (data) =>{
        return validateSequence(data);
    }

    onAllCheckboxChange = (event) =>{
        let checked = event.target.checked;
        this.setState((prevState) =>{
            let {tests} = prevState;
            Object.keys(tests).map( (key) =>{
                tests[key] = checked;
            })
            return {tests};
        })
    }
    onCheckboxChange = (event) =>{
        let {checked, name} = event.target;
        this.setState((prevState) =>{
            let {tests} = prevState;
            tests[[name]] = checked;
            return {tests};
        })
    }
    onClick = () =>{
        const params = this.normalize();
        this.setState({error:this.validator(params)})

        if(!this.validator(params)){
            const urlparams =  Object.keys(this.state.tests)
                .filter((key) => this.state.tests[key]===true);
            if (urlparams.length){
                fetch(`http://localhost:8080/md_test?tests=${urlparams}`, {
                    method:"POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({sequence:params})
                }).then((response) => response.json())
                    .then((data) => this.props.update(data)).catch()
            } else {
                this.setState({error:"Оберіть хоча б один метод"});
            }
        }
    }

    normalize = () =>{
        let params = this.state.sequence
        params = params.replace(/\s/g, "")
        return params
    }

    render() {

        return (
            <div>
                {this.state.error &&
                <>
                    <div className={"error"}>{this.state.error}</div>
                    <br/>
                </>
                }
                <label>{"Бітова послідовність:"}</label>
                <br />
                <textarea name={"sequence"} value={this.state.sequence} onChange={this.onChange} placeholder={"Введіть послідовність. Приклад: 00100010111"} />
                <br/>
                <input type={"checkbox"} name={"all"} onChange={this.onAllCheckboxChange}/>
                <label htmlFor>{"Обрати всі"}</label><br/>
                {
                    Object.keys(this.state.tests).map(key => (
                        <>
                            <input type={"checkbox"} name={key} checked={this.state.tests[key]} onChange={this.onCheckboxChange}/>
                            <label>{data[key]}</label><br/>
                        </>
                        )
                    )
                }
                <br/>
                <button className={"test-button"} onClick={this.onClick}>Тест</button>
                <h2>Результати:</h2>
            </div>

        );
    }
}
export default AllMdForm;