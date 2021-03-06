import React, { useEffect, Fragment } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Tline(){

    useEffect(
        ()=>{
        AOS.init({duration:2000})
    },[]);

    // console.log(this.props)
    // const Tdata=this.props.data.map( d =>{
    //     return(
    //         <Fragment>
    //             <div key={d.id}>
    //                 <div className='col-md-10 col-9 ms' data-aos={d.Tanimation}>

    //                     <div className={d.cardNum}>
    //                         <i className='fa fa-pencil fa-lg position-absolute' className={d.penNum}></i>
    //                     </div>

    //                     <div className='content'>

    //                         <i className='fa fa-caret-left position-absolute' className={d.tr}></i>
    //                         <span className={d.line}></span>

    //                         <h4 className='d-inline pr-4'>{d.Thead}</h4>
    //                         <span className='text-gray'>{d.Ttime}</span>
    //                         <div className='mt-4'>{d.Ttext}</div>

    //                     </div>

    //                 </div>
    //             </div>

    //             <div className='t-card-end position-absolute'>
    //             </div>

    //         </Fragment>
    //     )
        
    // })

    return(
        <div id='tline'>

            <p className='text-uppercase p-tx' data-aos='flip-right' data-aos-once="true">what is new </p>
            <h4 className='text-uppercase mb-4' data-aos='fade-up' data-aos-once="true">TimeLine</h4>

           <div className='container mt-5'>
               <div className='row'>

               <div className='col-md-10 col-9 ms' data-aos='fade-up-right'>

                <div className='t-card-1 position-absolute'>
                    <i className='fa fa-pencil fa-lg position-absolute pen-1'></i>
                </div>

                <div className='content'>
                    <i className='fa fa-caret-left position-absolute tr-1'></i>
                    <span className='line-1 position-absolute'></span>

                    <h4 className='d-inline pr-4 '>Learning react</h4>
                    <span className='text-gray'>SEP-2021</span>
                    <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet at itaque repellat inventore ipsam obcaecati, 
                    illum vitae reiciendis aliquam ipsa corrupti adipisci 
                    aut nulla odio minima iure deserunt possimus doloremque!
                    </p>
                </div>
            </div>

            {/* * data-aos-once="false"  */}

            <div className='col-md-10 col-9 ms' data-aos='fade-up-left' >
                <div className='t-card-2 position-absolute'>
                    <i className='fa fa-pencil fa-lg position-absolute pen-2'></i>
                </div>

                <div className='content'>

                    <i className='fa fa-caret-left position-absolute tr-2'></i>
                    <span className='line-2 position-absolute'></span>

                    <h4 className='d-inline pr-4'>Undergraduation at HTI</h4>
                    <span className='text-gray'>2019-...</span>
                    <p className='mt-4'>
                        I am pursuing my under-graduation studies
                        with major in I.C.T.(Information & Communication Technology).
                        I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management 
                        over the years and have better understanding of these subjects.I have also been part
                        of S.B.G.(Student Body Govenance) scince my first year of college.

                    </p>
                </div>
            </div>

            <div className='col-md-10 col-9 ms' data-aos='fade-up'>
                <div className='t-card-3 position-absolute'>
                    <i className='fa fa-pencil fa-lg position-absolute pen-3'></i>
                </div>

                <div className='content'>
                    
                    <i className='fa fa-caret-left position-absolute tr-3'></i>
                    <span className='line-3 position-absolute'></span>

                    <h4 className='d-inline pr-4'>Primary and Higher Education</h4>
                    <span className='text-gray'>2013-2019</span>
                    <p className='mt-4'>
                        I have completed my higher secondary education with major subjects as Physics,
                        Chemistry & Maths with 91 merit. During my time at school, 
                        I have developed interest in solving complex problems of the fundamental 
                        physics which helped me to improve my understanding of any problem and also my mathematical
                         skills to actually solve the problems.
                    </p>
                </div>
            </div>
                
                
            

               </div>
           </div>
            
        </div>
    )
}

export default Tline;