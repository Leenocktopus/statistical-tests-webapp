import React, {Component} from 'react';
import Wrapper from "./util/Wrapper";
import eight from "../../images/eight.jpg"
import z from "../../images/z.jpg"

class Test8 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h2>Восьмий тест</h2>
                <p>
                    Тест полягає в знаходженні спільної вірогідності двох подій:
                    k1 = η(<b>tt</b>) та k2 = η(<b>t*tt*</b>).
                    <p>Приклад шаблонів для тесту:</p>
                    <table className={"templates"}>
                        <thead>
                        <th>t</th>
                        <th>k1</th>
                        <th>k2</th>
                        </thead>
                        <tr>
                            <td>0</td>
                            <td>00</td>
                            <td>101</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>11</td>
                            <td>010</td>
                        </tr>
                    </table>
                    <p>Для визначення спільної вірогідності, використовується наступна формула:</p>
                </p>
                <div className={"formula-image"}>
                    <img src={eight}/>
                </div>
                <p>
                    Функція Z(a,b) визначена наступною формулою:
                </p>
                <div className={"formula-image"}>
                    <img style={{width:"35%"}} src={z}/>
                </div>
                <Wrapper url={"eight"}/>
            </div>
        );
    }
}

export default Test8;