import React, {Component} from 'react';
import Wrapper from "./util/Wrapper";
import five from "../../images/five.jpg"
import z from "../../images/z.jpg"

class Test5 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h2>П'ятий тест</h2>
                <p>
                    Тест полягає в знаходженні спільної вірогідності трьох подій:
                    k1 = η(<b>tt*</b>) та k2 = η(<b>ttt</b>).
                    <p>Приклад шаблонів для тесту:</p>
                    <table className={"templates"}>
                        <thead>
                        <th>t</th>
                        <th>k1</th>
                        <th>k2</th>
                        </thead>
                        <tr>
                            <td>0</td>
                            <td>01</td>
                            <td>000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>10</td>
                            <td>111</td>
                        </tr>
                    </table>
                    <p>Для визначення спільної вірогідності, використовується наступна формула:</p>
                </p>
                <div className={"formula-image"}>
                    <img src={five}/>
                </div>
                <p>
                    Функція Z(a,b) визначена наступною формулою:
                </p>
                <div className={"formula-image"}>
                    <img style={{width:"35%"}} src={z}/>
                </div>
                <Wrapper url={"five"}/>
            </div>
        );
    }
}

export default Test5;