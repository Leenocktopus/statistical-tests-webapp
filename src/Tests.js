import React from "react";
import {Route} from "react-router-dom";
import NistTests from "./nist/NistTests";
import MdTests from "./md/MdTests";

const Tests = ({match}) => (
    <div className={"container"}>
            <Route path={`${match.url}/nist`} component={NistTests}/>
            <Route path={`${match.url}/md`} component={MdTests}/>
    </div>
);
export default Tests;