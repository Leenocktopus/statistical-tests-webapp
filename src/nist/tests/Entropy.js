import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import {validateEntropy} from "./util/Validator";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";


class Entropy extends NistTest {

    validate(data) {
        return validateEntropy(data);
    }


    render() {
        return (
            <div>
                <h2>Тест приблизної ентропії</h2>
                <p>
                    В тесті проводиться пошук частоти появи всіх можливих шаблонів, що перетинаються
                    довжини М, M-1 та M-2. На основі порівняння отриманих значень з теоретичними величинами
                    випадкової послідовності робиться висновок про випадковість.

                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img src={gammaQ}/>
                    </div>
                </p>

                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "", blockSize: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize: "Розмір блоку:"}}
                               url={"entropy"}
                               update={this.updateResult}
                               validator={this.validate}
                               placeholder={{blockSize: "Введіть число"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default Entropy;