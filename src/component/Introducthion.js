import React, {Component} from 'react';
import Typical from 'react-typical'

class Introduction extends Component{
render(){
    return(
        <div id='intro' className='container int'>
            <Typical
            steps={[`Hi!  I'm Doaa`, 5000, `I'm a Front-End Web Developer`, 5000]}
            loop={Infinity}
            // wrapper="I"
            />
        </div>

    )
}

}

export default Introduction;