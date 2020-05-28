import React, {Component} from 'react';
import Wrapper from "./util/Wrapper";
import one from "../../images/one.jpg"

class Test1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h2>Перший тест</h2>
                <p>
                    Тест полягає в знаходженні спільної вірогідності двох подій:
                    k1 = η(<b>tt*</b>) та k2 = η(<b>t1t*</b>) + η(<b>t0t*</b>).
                    <p>Приклад шаблонів для тесту:</p>
                    <table className={"templates"}>
                        <thead>
                            <th>t</th>
                            <th>k1</th>
                            <th>k2(1)</th>
                            <th>k2(2)</th>
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
                <img  src={one}/>
                </div>
                <Wrapper url={"one"}/>
            </div>
        );
    }
}

export default Test1;