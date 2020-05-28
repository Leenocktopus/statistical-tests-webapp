import React, {Component} from 'react';
import Wrapper from "./util/Wrapper";
import three from "../../images/three.jpg"

class Test3 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h2>Третій тест</h2>
                <p>
                    Тест полягає в знаходженні спільної вірогідності трьох подій:
                    k1 = η(<b>tt*</b>), k2 = η(<b>t1t*</b>) та k3 = η(<b>t0t*</b>).
                    <p>Приклад шаблонів для тесту:</p>
                    <table className={"templates"}>
                        <thead>
                        <th>t</th>
                        <th>k1</th>
                        <th>k2</th>
                        <th>k3</th>
                        </thead>
                        <tr>
                            <td>0</td>
                            <td>01</td>
                            <td>011</td>
                            <td>001</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>10</td>
                            <td>110</td>
                            <td>100</td>
                        </tr>
                    </table>
                    <p>Для визначення спільної вірогідності, використовується наступна формула:</p>
                </p>
                <div className={"formula-image"}>
                    <img  src={three}/>
                </div>
                <Wrapper url={"three"}/>
            </div>
        );
    }
}

export default Test3;