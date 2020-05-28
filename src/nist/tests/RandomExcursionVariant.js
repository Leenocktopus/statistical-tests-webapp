import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import erfc2 from "../../images/erfc2.jpg";
import ResultDisplay from "./util/ResultDisplay";
import {data} from "./util/NistData";


class RandomExcursionVariant extends NistTest {

    render() {
        return (
            <div>
                <h2>Тест на варіант довільних виключень</h2>
                <p>
                    В основі тесту лежить пошук загальної кількості відвідувань певного стану
                    в кумулятивній сумі випадкового блукання. Мета цього тесту - виявити відхилення
                    від очікуваного числа відвідування різних станів у випадковому блуканні.
                    <p>Для перевірки гіпотези використовується доповнююча функція помилок:</p>
                    <div className={"nist-formula"}>
                        <img src={erfc2}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"excursion_variant"}
                               update={this.updateResult}
                               validator={this.validate} />
                    {this.state.result ? <ResultDisplay result={this.state.result} data={data["excursion_variant"]["resultDisplay"]}/>
                    : <div/>}
                </div>
            </div>
        );
    }
}

export default RandomExcursionVariant;