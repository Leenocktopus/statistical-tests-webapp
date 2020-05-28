import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import {validateSerial} from "./util/Validator";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";
import {data} from "./util/NistData";


class Serial extends NistTest {

    validate(data) {
        return validateSerial(data);
    }


    render() {
        return (
            <div>
                <h2>Серійний тест</h2>
                <p>
                        В тесті проводиться пошук частоти появи всіх можливих шаблонів довжини М.
                        Ціль тесту - перевірити відповідність частот з очікуваними теоретичними значеннями.
                        Випадкові послідовності є рівномірними, тобто, кожен з шаблонів довжини М повинен
                        з'являтися з однаковою вірогідністю.
                        <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                        <div className={"nist-formula"}>
                            <img src={gammaQ}/>
                        </div>

                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "", blockSize: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize: "Розмір блоку:"}}
                               url={"serial"}
                               update={this.updateResult}
                               validator={this.validate}
                               placeholder={{blockSize: "Введіть число"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result} data={data["serial"]["resultDisplay"]}/>
                        : <div/>}
                </div>
            </div>
        );
    }
}

export default Serial;