import React, {Component} from 'react';
import Header from "./Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Tests from "./Tests";

class App extends Component {


    render() {
        return (
                <Router>
                    <ScrollToTop>
                        <Header/>
                        <Route exact path={"/"} component={MainPage}/>
                        <Route path={"/tests"} component={Tests}/>
                        <Footer/>
                    </ScrollToTop>
                </Router>
        );
    }
}

export default App
