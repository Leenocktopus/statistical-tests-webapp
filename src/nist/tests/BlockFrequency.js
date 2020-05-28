import React from 'react';
import NistTest from "./NistTest";
import InputForm from "./util/InputForm";
import {validateWithBlock} from "./util/Validator";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";


class BlockFrequency extends NistTest {

    validate(data){
        return validateWithBlock(data);
    };


    render() {
        return (

            <div>
                <h2>Частотний тест у блоці</h2>
                <p>
                    Ціль тесту - оцінити пропорцію одиниць в блоках довжини М. Для цього виконується
                    підрахунок одиниць в блоці та порівняння з очікуваним від випадкової послідовності
                    значенням M/2.
                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img src={gammaQ}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "", blockSize: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize: "Розмір блоку:"}}
                               url={"block_frequency"}
                               validator={this.validate}
                               update={this.updateResult}
                               placeholder={{blockSize: "Введіть число"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default BlockFrequency;