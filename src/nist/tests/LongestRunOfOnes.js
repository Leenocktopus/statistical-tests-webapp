import React from 'react';
import NistTest from "./NistTest";
import InputForm from "./util/InputForm";
import erfc2 from "../../images/erfc2.jpg";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";


class LongestRunOfOnes extends NistTest {



    render() {
        return (
            <div>
                <h2>Тест послідовності одиниць</h2>
                <p>
                    Цей тест можна також трактувати як найбільша "подібна послідовність" з одиниць.
                    Подібна послідовність являє собою декілька послідовних однакових бітів, на початку та
                    кінці якої знаходяться біти що мають протилежне значення. Тест визначає
                    найбільші "подібні послідовності" в блоках і порівнює з теоретичними значеннями що
                    повинна мати випадкова послідовність. Невідповідність в кількості одиниць вказує на
                    таку ж проблему з нулями, тому, тестування виконується тільки для одиниць.
                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img src={gammaQ}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"longest_run_of_ones"}
                               validator={this.validate}
                               update={this.updateResult}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default LongestRunOfOnes;