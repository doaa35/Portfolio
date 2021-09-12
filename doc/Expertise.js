import React from "react";

export const Headline=() => {

return(

    <div id='expertise'>
        <p className='text-uppercase p-tx'>what i do </p>
        <h4 className='text-uppercase mb-4'>here are some of my expertise</h4>
    </div> 
)  
}

export const Icons=() => {

    return(
        <div className='container  exp-card'>
            <div className='row'>

                <div className='col-3 e-1 exp text-center position-relative'>
                    <div className='exp-icons'>

                        <span className='fa fa-lightbulb-o light position-absolute'></span>   
                        
                        <span className='fa fa-caret-up up position-absolute'></span>
                        <span className=' middle position-absolute'></span>
                        <span className='fa fa-caret-down down position-absolute'></span>
                    </div>
                    <div className='exp-data'>
                        <h4 className='text-uppercase mb-4'>web development</h4>
                        <p className='text-uppercase p-tx'>
                            I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS 
                        </p>
                    </div>
                </div>

                <div className='col-3 exp text-center position-relative'>
                    <div className='exp-icons'>
                        <span className='fa fa-lightbulb-o light position-absolute'></span>   
                        
                        <span className='fa fa-caret-up up position-absolute'></span>
                        <span className=' middle position-absolute'></span>
                        <span className='fa fa-caret-down down position-absolute'></span>
                    </div>

                    <div className='exp-data'>
                            <h5 className='text-uppercase mb-4'>web development</h5>
                            <p className='p-tx'>
                                I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS 
                            </p>
                    </div>
                </div>

                <div className='col-3 exp text-center position-relative'>
                    <div className='exp-icons'>

                        <span className='fa fa-lightbulb-o light position-absolute'></span>   
                        
                        <span className='fa fa-caret-up up position-absolute'></span>
                        <span className=' middle position-absolute'></span>
                        <span className='fa fa-caret-down down position-absolute'></span>
                    </div>
                    <div className='exp-data'>
                        <h2 className='text-uppercase mb-4'>web development</h2>
                        <p className='text-uppercase p-tx'>
                            I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS 
                        </p>
                    </div>
                </div>

            </div>
        </div> 
    )  
    }