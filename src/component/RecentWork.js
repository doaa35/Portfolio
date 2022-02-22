import React, { useEffect } from "react";

import central from '../images/Capture.JPG';
import pro from '../images/pro.JPG';
import frsh from '../images/frsh.JPG'
import login from '../images/login.JPG'
import traveler from '../images/tra.JPG'
import f from '../images/f.JPG'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () =>{
    useEffect(
        ()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <div id ='work'>
            <div className='container overflow-hidden'>

                <p className='text-uppercase p-tx' data-aos='fade-down-left'>my work </p>
                <h4 className='text-uppercase mb-5' data-aos='fade-right'>recent work</h4>

                <div className='row'>

                    <div className='col-md-6' data-aos='fade-down-right'>
                        <a href='https://github.com/doaa35/Central-page' className='text-decoration-none'>
                                <img className='pic' src={central} alt='open source' />

                                <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                                </div>
                        </a>
                    </div>

                    <div className='col-md-6' data-aos='fade-down-left'>
                    <a href='https://github.com/doaa35/ProShop-page' className='text-decoration-none'>
                        <img className='pic' src={pro} alt='open source' />

                        <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                        </div>

                    </a>
                    </div>

                    <div className='col-md-6' data-aos='fade-right'>
                    <a href='https://github.com/doaa35/drinks-shop-page-2' className='text-decoration-none'>
                        <img className='pic' src={frsh} alt='open source' />

                        <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                        </div>

                    </a>
                    </div>

                    <div className='col-md-6' data-aos='fade-left'>
                    <a href='https://github.com/doaa35/login-page-' className='text-decoration-none'>
                        <img className='pic' src={login} alt='open source' />

                        <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                        </div>

                    </a>
                    </div>

                    <div className='col-md-6' data-aos='fade-up-right'>
                    <a href='https://github.com/doaa35/traveler-page' className='text-decoration-none'>
                        <img className='pic' src={traveler} alt='open source' />

                        <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                        </div>

                    </a>
                    </div>

                    <div className='col-md-6' data-aos='fade-up-left'>
                    <a href='https://github.com/doaa35/drinks-shop-page-1' className='text-decoration-none'>
                        <img className='pic' src={f} alt='open source' />

                        <div className='overlay position-absolute'>
                                    <h5 className='position-absolute text-white text-uppercase'>open source code</h5>
                        </div>

                    </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Work;