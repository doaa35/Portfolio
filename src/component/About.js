// import React , {Component} from 'react';
// import { fadeInLeft } from 'react-animations';
// // import Radium, {StyleRoot} from 'radium';
 
// const styles = {
//     fadeInLeft: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
//   }
// }
 
// class About extends Component {
//   render() {
//       return(


//         <div id='about'>

//         <StyleRoot>
//             <div className="test" style={styles.fadeInLeft}>
//                 
//             </div>
//         </StyleRoot>

//     </div>

//       )

//   }
// }
 

// export default About;


import React, { Component } from "react";

class About extends Component{
render(){
    return(
        <div id='about'>
            <p className='text-uppercase p-tx'>about </p>
            <h4 className='text-uppercase mb-4'>who am i?</h4>
            <p>
                I am a computer science student in HTI. 
                I love exploring new technologies and often amazed by the progress we as a 
                human species have mad so far in the recent years (apart from the headphone-jack part!!)
                <span className='d-block mt-3'>
                I have started reflecting my ideas and thougths through creating web pages.
                 </span>
            </p>
        </div>
    )
}

}

export default About;