import React, { Component } from "react";

import Introduction from "./Introducthion";
import About from './About';
import Work from "./RecentWork";
import Tline from "./TimeLine";

class Main extends Component{

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='main'>
                <Introduction />
                <About />
                <Tline />
                <Work />
            </div>
        );
    }
}

export default Main;