import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log(this.props)
        return (
            <div className={"header"}>
                <div className={"container"}>
                    <header>
                        <ul>
                            <li><Link to={"/"}>Random Bits</Link></li>
                            <li><Link to={"/tests/nist/all"}>Тести NIST</Link></li>
                            <li><Link to={"/tests/md/all"}>Тести багатовимірних статистик</Link></li>
                        </ul>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;