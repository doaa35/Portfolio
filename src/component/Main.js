import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Introduction from "./Introducthion";
import About from './About';
import Work from "./RecentWork";
import Tline from "./TimeLine";

const Main = () =>{
    useEffect(
        ()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <div>
            <Introduction />
            <div data-aos='fade-right' data-aos-once="true" >
                <About />
            </div>
            <Tline />
            <Work />


        </div>
    )
}

export default Main;