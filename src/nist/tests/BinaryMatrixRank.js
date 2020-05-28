import React from 'react';
import NistTest from "./NistTest";
import InputForm from "./util/InputForm";
import {validateWithMatrix} from "./util/Validator";
import gammaQ from "../../images/gammaQ.jpg";
import ResultDisplay from "./util/ResultDisplay";


class BinaryMatrixRank extends NistTest {

    validate(data){
        return validateWithMatrix(data);
    };


    render() {
        return (
            <div>
                <h2>Тест рангів бінарних матриць</h2>
                <p>
                    Суть тесту полягає в поділі послідовності на матриці фіксованого розміру та знаходженні
                    їх рангу. Ціль тесту - перевірити лінійну залежність між рядками фіксованої довжини які
                    входять в послідовність. Рішення про проходження тесту базується на теоретичних характеристиках
                    дійсно випадкової послідовності.
                    <p>Для перевірки гіпотези використовується наповна гамма функція:</p>
                    <div className={"nist-formula"}>
                        <img src={gammaQ}/>
                    </div>
                </p>
                <div className={"test-form-nist"}>
                    <InputForm
                        state={{sequence: "", matrixSize: ""}}
                               name={{sequence: "Бітова послідовність:", matrixSize: "Розмір матриці:"}}
                               url={"binary_matrix"}
                               validator={this.validate}
                               update={this.updateResult}
                               placeholder={{matrixSize: "Введіть число"}} />
                    {this.state.result ? <ResultDisplay result={this.state.result}/> :<div/>}
                </div>
            </div>
        );
    }
}

export default BinaryMatrixRank;