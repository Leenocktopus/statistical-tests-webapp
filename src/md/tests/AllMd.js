import React, {Component} from 'react';
import PieChart from "./util/PieChart";
import {data} from "./util/MdData";
import AllMdForm from "./AllMdForm";

class AllMd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            index: 0,
            keys: []
        }

    }

    next = () =>{

        if (this.state.index < Object.keys(this.state.result).length-1){
            this.setState({index: ++this.state.index})
        }
    }

    prev = () =>{
        if (this.state.index > 0){
            this.setState({index: --this.state.index})
        }
    }

    update = (data)=>{
        this.setState({result:data,
                            keys: Object.keys(data).map((key =>(
                                key
                            ))),
                            index: 0})

    }

    render() {

        return (
            <div>
                <h2>Комплексний тест послідовності з використанням тестів заснованих на багатовимірних статистиках</h2>

                <AllMdForm update ={this.update}/>
                <div id={"md-all-result"}>
                    <div>
                        {!Object.keys(this.state.result).length === false ?
                            <table>
                                {Object.keys(this.state.result).map(key => (
                                    <tr>
                                        <td style={{fontWeight:"bolder"}}>{data[key]}</td>
                                        <td>
                                            {this.state.result[key].value.toFixed(10)}
                                        </td>
                                    </tr>

                                ))}
                            </table> :
                            <div style={{padding: "20px"}}>Виконайте тести щоб отримати результати</div>}
                    </div>

                    {this.state.result!==0 ? <div>
                        <PieChart name = {data[this.state.keys[this.state.index]]}
                                  pValue={this.state.result[this.state.keys[this.state.index]]["value"]}/>
                        <div style={{textAlign: "center"}}>
                            <button className={"direction-button"}
                                    onClick={this.prev}>
                                &#60;</button>
                            <button className={"direction-button"}
                                    onClick={this.next}>
                                &#62;</button>
                        </div>
                    </div> : <div/>}


                </div>
            </div>

        );
    }
}
export default AllMd;