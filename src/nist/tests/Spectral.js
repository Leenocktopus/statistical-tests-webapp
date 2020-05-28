import React from 'react';
import NistTest from "./NistTest";
import InputForm from "./util/InputForm";
import erfc2 from "../../images/erfc2.jpg";
import ResultDisplay from "./util/ResultDisplay";


class Spectral extends NistTest {



    render() {
        return (
            <div>
                <h2>Спектральний тест</h2>
                <p>
                    Тест полягає в пошуку кількості піків дискретної трансформації Фур'є вхідної
                    послідовності. Ціль - визначити періодичні властивості послідовності, що можуть
                    вказувати на відхилення від гіпотези про випадковість послідовності. Для прийняття
                    рішення про випадковість кількість піків що перевищують границю в 95% повинна бути
                    наближена до 5%.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"spectral"}
                               validator={this.validate}
                               update={this.updateResult}/>
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default Spectral;