import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {data} from "./tests/util/NistData";

class NistMenu extends Component {
    render() {
        return (
            <div className={'sidebar-menu'}>
                <ul>
                    <li><NavLink activeClassName={"active-test"} to={"/tests/nist/all"}>Всі тести</NavLink></li>
                    {Object.keys(data).map(key => (
                        <li key={key}><NavLink activeClassName={"active-test"} to={`/tests/nist/${key}`}>{data[key]["ukrName"]}</NavLink></li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default NistMenu;