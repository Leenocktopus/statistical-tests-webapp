import React, {Component} from 'react';
import Wrapper from "./util/Wrapper";
import six from "../../images/six.jpg"
import z from "../../images/z.jpg"

class Test6 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h2>Шостий тест</h2>
                <p>
                    Тест полягає в знаходженні спільної вірогідності трьох подій:
                    k1 = η(<b>tt*</b>) та k2 = η(<b>tt*t</b>).
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
                            <td>010</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>10</td>
                            <td>101</td>
                        </tr>
                    </table>
                    <p>Для визначення спільної вірогідності, використовується наступна формула:</p>
                </p>
                <div className={"formula-image"}>
                    <img src={six}/>
                </div>
                <p>
                    Функція Z(a,b) визначена наступною формулою:
                </p>
                <div className={"formula-image"}>
                    <img style={{width:"35%"}} src={z}/>
                </div>
                <Wrapper url={"six"}/>
            </div>
        );
    }
}

export default Test6;