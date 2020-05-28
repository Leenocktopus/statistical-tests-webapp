import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import {validateMaurers} from "./util/Validator";
import erfc2 from "../../images/erfc2.jpg";
import ResultDisplay from "./util/ResultDisplay";


class Maurers extends NistTest {


    validate(data) {
        return validateMaurers(data);
    }

    render() {
        return (
            <div>
                <h2>Універсальний тест Маурера</h2>
                <p>
                    Ціль тесту - перевірити кількість бітів між подібними шаблонами. На основі цього,
                    робиться висновок про можливий рівень компресії послідовності.
                    Послідовність що можна сильно стиснути не є випадковою.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>

                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "",blockSize: "", blocksInInitSegment: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize: "Розмір блоку:", blocksInInitSegment:"Кількість блоків: "}}//Кількість в початковому сегменті:
                               url={"maurers"}
                               update={this.updateResult}
                               validator={this.validate}
                               placeholder={{blockSize: "Введіть число", blocksInInitSegment: "Введіть число"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default Maurers;