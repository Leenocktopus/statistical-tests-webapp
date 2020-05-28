import React, {Component} from 'react';


class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: this.props.state,
            error: false
        }
    }


    normalize = () =>{
        const params = this.state.params
        Object.keys(params).map((item) =>{
            params[item] = params[item].replace(/\s/g, "")
            return params;
        })
        return params
    }

    onClick = () =>{
        const params = this.normalize();
        this.setState({error:this.props.validator(this.state.params)})
        if(!this.props.validator(this.state.params)){

        fetch(`http://localhost:8080/nist_test/${this.props.url}`, {
            method:"POST",
            mode: "cors",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(params)
        }).then((response) => response.json())
            .then((data) => {this.props.update(data, params)
                this.setState({data})})
            .catch(
            () => {throw `API error on ${this.props.url}`}
        )
    }else {
            this.props.update(0,0);
        }


    }

    onChange = (event) =>{
        const {name, value} = event.target;
        this.setState(prevState =>{
            let params = Object.assign({}, prevState.params)
            params[[name]] = value;
            return {params};
        });

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
                <label>{this.props.name["sequence"]}</label>
                <br />
                <textarea name={"sequence"} value={this.state.params.sequence} onChange={this.onChange} placeholder={"Введіть послідовність. Приклад: 00100010111"}/>
                <br/>
                {Object.keys(this.state.params).map( (key) =>{
                        if(key !== "sequence"){
                        return (
                            <React.Fragment  key={key}>
                                <label htmlFor={key}>{this.props.name[key]}</label>
                                <input name={key} value={this.state.params.key} type={"text"} onChange={this.onChange} placeholder={this.props.placeholder[key]}/>
                                <br/>
                            </React.Fragment>);
                        }
                })}
                <br/>
                <button className={"test-button"} onClick={this.onClick}>Тест</button>
            </div>
        );
    }
}

export default InputForm;

/*
      constructor(props) {         super(props);         this.state = {             values: this.props.state,             valid : {}         };     }      componentDidMount() {         Object.keys(this.state.values).map((key) =>{
 */