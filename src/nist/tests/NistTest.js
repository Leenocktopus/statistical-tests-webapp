import React, {Component} from 'react';
import {validateSequence} from "./util/Validator";


class NistTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            params : 0
        }
    }

    updateResult = (data, params) =>{
        this.setState({
            result:data,
            params:params})
    }

    validate(data){
        return validateSequence(data);
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default NistTest