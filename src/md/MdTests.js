import React from 'react';
import {Route} from "react-router-dom";

import MdMenu from "./MdMenu";
import Test1 from "./tests/Test1";
import Test2 from "./tests/Test2";
import Test3 from "./tests/Test3";
import Test7 from "./tests/Test7";
import Test8 from "./tests/Test8";
import Test6 from "./tests/Test6";
import Test5 from "./tests/Test5";
import Test4 from "./tests/Test4";
import AllMd from "./tests/AllMd";


const MdTests = ({match}) => (
    <div className={"main-grid-md"}>
        <MdMenu/>
        <Route path={`${match.url}/all`} component={AllMd}/>
        <Route path={`${match.url}/one`} component={Test1}/>
        <Route path={`${match.url}/two`} component={Test2}/>
        <Route path={`${match.url}/three`} component={Test3}/>
        <Route path={`${match.url}/four`} component={Test4}/>
        <Route path={`${match.url}/five`} component={Test5}/>
        <Route path={`${match.url}/six`} component={Test6}/>
        <Route path={`${match.url}/seven`} component={Test7}/>
        <Route path={`${match.url}/eight`} component={Test8}/>
    </div>
);
export default MdTests;