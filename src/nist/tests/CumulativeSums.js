import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import normal from "../../images/normal.jpg";
import ResultDisplay from "./util/ResultDisplay";
import {data} from "./util/NistData";


class CumulativeSums extends NistTest {

    render() {

        return (
            <div>
                <h2>Тест кумулятивних сум</h2>
                <p>
                    Мета тесту – визначити, чи є сукупна сума часткових послідовностей,
                    що виникають в досліджуваній занадто великою або занадто малою щоб
                    послідовність могла вважатися дійсно випадковою.
                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img style={{width:"40%"}} src={normal}/>
                    </div>
                </p>
                    <div className={"test-form-nist"}>
                        <InputForm state={{sequence: ""}}
                                   name={{sequence: "Бітова послідовність:"}}
                                   url={"cumulative_sums"}
                                   validator = {this.validate}
                                   update={this.updateResult}/>
                        {this.state.result ? <ResultDisplay result={this.state.result} data={data["cumulative_sums"]["resultDisplay"]}/>
                            : <div/>}
                    </div>
                </div>

        );
    }
}

export default CumulativeSums;