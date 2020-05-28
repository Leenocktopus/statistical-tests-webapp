import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import {validateWithBlock} from "./util/Validator";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";


class LinearComplexity extends NistTest {

    validate(data) {
        return validateWithBlock(data);
    }


    render() {
        return (
            <div>
                <h2>Тест на лінійну складність</h2>
                <p>
                    <p>
                        В основі тесту лежить знаходження довжини регістру зсуву з лінійним зворотнім
                        зв’язком. Ціль тесту – визначити чи є послідовність достатньо складною щоб бути
                        дійсно випадковою. Чим менша довжина регістру, тим більша вірогідність
                        що послідовність не є випадковою.
                        <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                        <div className={"nist-formula"}>
                            <img src={gammaQ}/>
                        </div>
                    </p>
                </p>


                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "", blockSize: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize:"Розмір блоку:" }}
                               url={"linear_complexity"}
                               update={this.updateResult}
                               validator={this.validate}
                               placeholder={{blockSize: "Введіть число"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default LinearComplexity;