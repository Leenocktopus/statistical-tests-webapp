import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {data} from "./tests/util/MdData";

class MdMenu extends Component {
    render() {
        return (
            <div className={'sidebar-menu'}>
                <ul>
                    <li> <NavLink activeClassName={"active-test"} to={"/tests/md/all"}>Всі тести</NavLink> </li>
                    {
                        Object.keys(data).map(key =>(
                            <li key={key}>
                                <NavLink activeClassName={"active-test"} to={`/tests/md/${key}`}>{data[key]}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default MdMenu;