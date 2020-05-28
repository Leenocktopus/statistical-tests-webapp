import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import erfc2 from "../../images/erfc2.jpg";
import ResultDisplay from "./util/ResultDisplay";


class Runs extends NistTest {

    render() {
        return (
            <div>
                <h2>Тест подібних послідовностей</h2>
                <p>
                    Роль тесту - визначити кількість "подібних послідовностей" в початковій послідовності.
                    Подібна послідовність являє собою декілька послідовних однакових бітів, на початку та
                    кінці якої знаходяться біти що мають протилежне значення. Тест показує характер осциляції
                    між появою нулів та одиниць, і перевіряє відповідність кількості "подібних послідовностей"
                    очікуваним від випадкової значенням.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"runs"}
                               update={this.updateResult}
                               validator={this.validate} />
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default Runs;