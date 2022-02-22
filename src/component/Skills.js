import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () =>{

    useEffect(
        ()=>{
        AOS.init({duration:2000})
    },[]);

    

    return(
        <div id='skills'>
            <div className='stext' data-aos='fade-right'>
                <p className='text-uppercase p-tx'>MY SPECIALTY</p>
                <h4 className='text-uppercase mb-4'>who am i?</h4>
                <p>I'am constantly traying to improve myself</p>
            </div>

            <div className='progress'>
                <div></div>
            </div>

            
        </div>
    )
}

export default Skills;