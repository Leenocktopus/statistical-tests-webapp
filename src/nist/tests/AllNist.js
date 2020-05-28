import React, {Component, Fragment} from 'react';
import {
    validateEntropy,
    validateMaurers,
    validateSequence,
    validateSerial,
    validateWithBlock,
    validateWithMatrix,
    validateWithTemplate
} from "./util/Validator";
import {data} from "./util/NistData";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class AllNist extends Component{

    constructor(props) {
        super(props);
        this.state = {
            sequence: "",
            error: "",
            acceptance: 0.1,
            tests: {
                frequency: {
                    checked: false,
                },
                block_frequency: {
                    checked: false,
                    blockSize: "",
                    error: ""
                },
                runs:{
                    checked: false,
                },
                longest_run_of_ones:{
                    checked: false,
                },
                binary_matrix: {
                    checked: false,
                    matrixSize: "",
                    error: ""
                },
                spectral:{
                    checked: false,
                    error: ""
                },
                non_overlapping_template:{
                    checked: false,
                    blockSize: "",
                    template: "",
                    error: ""
                },
                overlapping_template:{
                    checked: false,
                    blockSize: "",
                    template: "",
                    error: ""
                },
                maurers:{
                    checked: false,
                    blockSize: "",
                    blocksInInitSegment: "",
                    error: ""
                },
                linear_complexity:{
                    checked: false,
                    blockSize: "",
                    error: ""
                },
                serial:{
                    checked: false,
                    blockSize: "",
                    error: ""
                },
                entropy:{
                    checked: false,
                    blockSize: "",
                    error: ""
                },
                cumulative_sums:{
                    checked: false,
                },
                random_excursions:{
                    checked: false,
                },
                excursion_variant: {
                    checked: false,
                },
            }
        }

    }
    onChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    onTestParamsChange = (event) =>{
        const {name, value} = event.target;
        this.setState((prevState) =>{
            let {tests} = prevState;
            let path = name.split(".");
            tests[path[0]][path[1]] = value;
            return {tests};
        })
    }

    onClick = () =>{
        const sequence = this.normalize();
        this.setState({error:validateSequence(sequence)})
        if(!validateSequence(sequence)){
            let tests = JSON.parse(JSON.stringify(this.state.tests));
            let testParams = Object.keys(tests).filter(
                key => tests[key]["checked"]===true
            ).reduce((obj, key) =>{
                obj[key] = tests[key];
                return obj;
            }, {})
            Object.keys(testParams).map((key) =>{testParams[key]["sequence"] = sequence;});

           if (!Object.keys(testParams).length === false && testParams.constructor === Object){
                Object.keys(testParams)
                    .map((key) =>{
                    delete  testParams[key]["checked"];
                    delete  testParams[key]["error"];
                });
                if(this.validator(testParams)){
                    fetch(`http://localhost:8080/nist_test`, {
                        method:"POST",
                        mode: "cors",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(testParams)
                    }).then((response) => response.json())
                        .then((data) => this.setState({result:data})).catch()
                }
            } else {
                this.setState({error:"Оберіть хоча б один метод"});

            }

    }}

    normalize = () =>{
        let params = this.state.sequence
        params = params.replace(/\s/g, "")

        return params
    }

    onAllCheckboxChange = (event) =>{
        let checked = event.target.checked;
        this.setState((prevState) =>{
            let {tests} = prevState;
            Object.keys(tests).map( (key) =>{
                if (checked === false){ //// ?????????????
                    Object.keys(tests[key]).map(innerKey =>{
                        tests[key][innerKey] = ""
                    })
                }
                tests[key]["checked"] = checked;
            })
            return {tests};
        })
    }
    onCheckboxChange = (event) =>{
        let {checked, name} = event.target;
        this.setState((prevState) =>{
            let {tests} = prevState;
            if (checked === false){ //// ?????????????
                Object.keys(tests[[name]]).map(key =>{
                        tests[[name]][key] = ""
                })
            }
            tests[[name]]["checked"] = checked;

            return {tests};
        })
    }

    validator = (data) =>{
        let counter = 0;
        Object.keys(data)
            .map((key) => {
                let validate
                if(["block_frequency", "linear_complexity"].includes(key)){
                    validate = validateWithBlock
                } else if (key === "entropy"){
                    validate = validateEntropy
                } else if (key === "binary_matrix"){
                    validate = validateWithMatrix
                } else if (["overlapping_template", "non_overlapping_template"].includes(key)){
                    validate = validateWithTemplate
                } else if (key === "serial"){
                    validate = validateSerial
                } else if (key === "maurers"){
                    validate = validateMaurers
                } else {
                    validate = validateSequence
                }
                let error = validate(data[key])
                this.setState((prevState) =>{
                    let test = prevState.tests[key]
                    test["error"] = error
                    return {test};
                })
                if (error){
                    counter++;
                }
            })
        return counter === 0
    }

    getNumbersPassed = ()=>{
        const numbers = Object.keys(this.state.result).map((key) =>{
            if (Array.isArray(this.state.result[key])){
                const val = this.state.result[key].map(item =>{

                    if (item.pValue < this.state.acceptance){
                        return 1;
                    } else {
                        return 0;
                    }
                })
                if(val.reduce((x1,x2) => x1+x2, 0)===0){
                    return 1
                } else {
                    return 0;
                }
            }else {
                if (this.state.result[key].pValue < this.state.acceptance){
                    return 0;
                } else {
                    return 1;
                }
            }
        })

        return numbers.reduce((x1,x2) => x1 + x2, 0);
    }

    render() {
        return (
            <div >
                <h2>Комплексний тест послідовності з використанням тестів NIST</h2>

                {this.state.error &&
                <>
                    <div className={"error"}>{this.state.error}</div>
                    <br/>
                </>
                }
                <label>{"Бітова послідовність:"}</label>
                <br />
                <textarea name={"sequence"} value={this.state.sequence} onChange={this.onChange} placeholder={"Введіть послідовність. Приклад: 00100010111"}/>
                <div id={"nist-additional-fields-grid"}>
                <div>
                <input type={"checkbox"} name={"all"} onChange={this.onAllCheckboxChange}/>
                <label htmlFor>{"Обрати всі"}</label></div>

                {
                    Object.keys(data).map((key) =>(
                        <div key={key}>
                            <input type={"checkbox"} name={key} checked={this.state.tests[key].checked} onChange={this.onCheckboxChange}/>
                            <label >{data[key]["ukrName"]}</label><br/>
                            {this.state.tests[key].error &&
                                <>
                                    <div className={"error"}>{this.state.tests[key].error}</div>
                                    <br/>
                                </>
                            }
                            <div className={"nist-additional-fields"}>
                                <table>
                                {this.state.tests[key].checked &&  Object.keys(data[key]["fields"]).map((innerKey) =>(
                                        <Fragment key={innerKey}>
                                                <tr>
                                                    <td><label>{data[key]["fields"][innerKey]["ukrName"]}</label></td>
                                                    <td>  <input type={"text"} name={`${key}.${innerKey}`} onChange={this.onTestParamsChange}
                                                                 value={this.state.tests[key][innerKey]} placeholder={data[key]["fields"][innerKey]["tooltip"]}/></td>
                                                </tr>

                                        </Fragment>
                                ))}
                                </table>
                            </div>
                        </div>
                        )

                    )
                }
                </div>
                <br/>
                <button className={"test-button"} onClick={this.onClick}>Тест</button>
                <h2>Результати: </h2>
                <div id={"nist-all-result"}>
                    <div>
                        <table className={"nist-res"}>
                            { this.state.result ? Object.keys(this.state.result)
                                .map(key => {
                                    if (Array.isArray(this.state.result[key])){
                                        return (
                                            <>
                                            <tr key ={key}>
                                                <td className={"table-test-name"} colSpan={3}>{data[key]["ukrName"]}</td>
                                            </tr>

                                                    {this.state.result[key].map((item, index) =>(
                                                        <tr key ={index}>
                                                            <td>{data[key]["resultDisplay"][index]}</td>
                                                            <td>{item.pValue.toFixed(10)}</td>
                                                            <td className={item.pValue<this.state.acceptance ? "non-random":"random"}/>
                                                        </tr>
                                                    ))}

                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <tr>
                                                    <td className={"table-test-name"} colSpan={3}>{data[key]["ukrName"]}</td>
                                                </tr>
                                                <tr>
                                                    <td/>
                                                    <td>{this.state.result[key].pValue.toFixed(10)}</td>
                                                    <td className={this.state.result[key].pValue<this.state.acceptance ? "non-random":"random"}/>
                                                </tr>
                                            </>
                                        )
                                    }
                                }) : <div>Виконайте тести щоб отримати результати</div>

                            }
                        </table>
                    </div>
                    <div>
                        {this.state.result &&
                            <>
                        <h3>Тестів пройдено: {this.getNumbersPassed()}/{Object.keys(this.state.result).length}</h3>
                        <HighchartsReact highcharts={Highcharts} options={{
                            chart: {
                            type: 'pie',
                            height: 300,
                            width: 300
                        },
                            title: {
                                text: ""
                            },
                            legend: {
                            enabled: false,
                        },
                            credits: {
                            enabled: false
                        },
                            series:  [{
                            data : [
                            ["",this.getNumbersPassed()],
                            ["",Object.keys(this.state.result).length - this.getNumbersPassed()]
                            ]
                        }],
                            colors:["#90ee90", "#ffcccb"],

                            plotOptions:{
                                series: {
                                    marker:{
                                        enabled: false
                                    },
                                    enableMouseTracking: false
                                },
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: false,
                                    }
                                }

                            }

                        }}/>
                        </>
                        }

                    </div>
                </div>
            </div>
        );
    }

}
export default AllNist;
