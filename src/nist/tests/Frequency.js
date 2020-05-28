import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from './NistTest';
import erfc2 from '../../images/erfc2.jpg';
import ResultDisplay from "./util/ResultDisplay";

export class Frequency extends NistTest {



    render() {

        return (

            <div>
                <h2>Частотний тест</h2>
                <p>
                    Роль тесту - знайти пропорцію нулів та одиниць в бітовій послідовності. Це виконується для того,
                    щоб перевірити чи є число одиниць та нулів послідовності наближеним до очікуваного від випадкової.
                    Тест оцінює наближення числа одиниць до ½, тобто, в випадковій послідовності число одиниць та нулів
                    повинно бути приблизно однаковим.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"frequency"}
                               update={this.updateResult}
                               validator={this.validate} />
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default Frequency;