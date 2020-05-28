import React from 'react';
import NistTest from "./NistTest";
import InputForm from "./util/InputForm";
import {validateWithTemplate} from "./util/Validator";
import erfc2 from "../../images/erfc2.jpg";
import ResultDisplay from "./util/ResultDisplay";


class OverlappingTemplate extends NistTest {

    validate(data){
        return validateWithTemplate(data);
    };


    render() {
        return (
            <div>
                <h2>Тест шаблонів що перетинаються</h2>
                <p>
                    В тесті виконується розбиття послідовності на рівні блоки довжини М і пошук
                    кількості входжень шаблонів що перетинаються. Тест проводиться з ціллю визначити
                    генератори що створюють велику кількість неперіодичних шаблонів.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: "", blockSize: "", template: ""}}
                               name={{sequence: "Бітова послідовність:", blockSize: "Розмір блоку:", template:"Шаблон:"}}
                               url={"overlapping_template"}
                               validator={this.validate}
                               update={this.updateResult}
                               placeholder={{blockSize: "Введіть число", template: "Приклад: 001, 01"}}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default OverlappingTemplate;