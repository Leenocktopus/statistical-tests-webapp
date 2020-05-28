import React from 'react';
import {Route} from "react-router-dom";
import NistMenu from "./NistMenu";
import Frequency from "./tests/Frequency";
import BlockFrequency from "./tests/BlockFrequency";
import CumulativeSums from "./tests/CumulativeSums";
import NonOverlappingTemplate from "./tests/NonOverlappingTemplate";
import OverlappingTemplate from "./tests/OverlappingTemplate";
import Maurers from "./tests/Maurers";
import Spectral from "./tests/Spectral";
import BinaryMatrixRank from "./tests/BinaryMatrixRank";
import LongestRunOfOnes from "./tests/LongestRunOfOnes";
import RandomExcursionVariant from "./tests/RandomExcursionVariant";
import RandomExcursions from "./tests/RandomExcursions";
import Entropy from "./tests/Entropy";
import Serial from "./tests/Serial";
import Runs from "./tests/Runs";
import LinearComplexity from "./tests/LinearComplexity";
import AllNist from "./tests/AllNist";


const NistTests = ({match}) => (
    <div className={"main-grid-nist"}>
        <NistMenu/>
        <Route exact path={`${match.url}/all`} component={AllNist}/>
        <Route exact path={`${match.url}/frequency`} component={Frequency}/>
        <Route exact path={`${match.url}/block_frequency`} component={BlockFrequency}/>
        <Route path={`${match.url}/runs`} component={Runs}/>
        <Route path={`${match.url}/longest_run_of_ones`} component={LongestRunOfOnes}/>
        <Route path={`${match.url}/binary_matrix`} component={BinaryMatrixRank}/>
        <Route path={`${match.url}/spectral`} component={Spectral}/>
        <Route path={`${match.url}/non_overlapping_template`} component={NonOverlappingTemplate}/>
        <Route path={`${match.url}/overlapping_template`} component={OverlappingTemplate}/>
        <Route path={`${match.url}/maurers`} component={Maurers}/>
        <Route path={`${match.url}/linear_complexity`} component={LinearComplexity}/>
        <Route path={`${match.url}/serial`} component={Serial}/>
        <Route path={`${match.url}/entropy`} component={Entropy}/>
        <Route path={`${match.url}/cumulative_sums`} component={CumulativeSums}/>
        <Route path={`${match.url}/random_excursions`} component={RandomExcursions}/>
        <Route path={`${match.url}/excursion_variant`} component={RandomExcursionVariant}/>
    </div>
);
export default NistTests;