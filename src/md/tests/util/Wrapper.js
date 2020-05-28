import React, {Component} from 'react';
import InputForm from "./InputForm";
import PieChart from "./PieChart";

class Wrapper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    update = (data)=>{
        this.setState({result:data})
    }

    render() {

        return (
            <div className={"test-form"}>
                <div>
                    <InputForm update={this.update} url={this.props.url}/>

                    <h3>
                        <span>Результат тесту: </span>
                        {this.state.result.value && this.state.result.value.toFixed(10)}
                    </h3>
                </div>

                {this.state.result.value ?
                    <PieChart pValue={this.state.result.value}/> :
                    <PieChart pValue={0}/>
                }
            </div>
        );
    }

}
export default Wrapper