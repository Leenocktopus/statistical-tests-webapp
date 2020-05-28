import React from 'react';
import InputForm from "./util/InputForm";
import NistTest from "./NistTest";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";
import {data} from "./util/NistData";


class RandomExcursions extends NistTest {

    render() {
        return (
            <div>
                <h2>Тест на довільні виключення</h2>
                <p>
                    Тест полягає у знаходженні кількості циклів, що мають точно K відвідувань,
                    у кумулятивній сумі випадкового блукання. Мета - визначити, чи відповідає
                    кількість відвідувань певного стану протягом циклу тому, що можна було б
                    очікувати від випадкової послідовності.
                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img src={gammaQ}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm state={{sequence: ""}}
                               name={{sequence: "Бітова послідовність:"}}
                               url={"random_excursions"}
                               update={this.updateResult}
                               validator={this.validate} />
                    {this.state.result ? <ResultDisplay result={this.state.result} data={data["random_excursions"]["resultDisplay"]}/>
                        : <div/>}
                </div>
            </div>
        );
    }
}

export default RandomExcursions;
/*
this.state.result.map((element, index) =>(
                    <div key={index}>
                    <div >{element.pValue}</div>
                    <ChartComponent data={GammaData(5. / 2)} result={element}/>
                    </div>)
                )
 */