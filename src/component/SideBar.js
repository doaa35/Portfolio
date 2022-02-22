import React, {Component} from 'react';
import pic from '../images/pic.jpg';
// import { openNav, closeNav } from '../js/actions';

class SideBar extends Component{


    render(){

        const social = this.props.icons.map( icon =>{
            return(
                <ul key={icon.id} className='list-unstyled'>
                    <a className='text-decorated-none text-dark position-relative' href={icon.path}>
                        <li className={icon.name}></li>
                    </a>
                </ul>
            )
            
        })

        const linkat= <ul className='list-unstyled'>
                        <li className='text-uppercase mt-3'><a href='#intro' className='position-relative text-decoration-none active'>introduction</a></li>
                        <li className='text-uppercase mt-3'><a href='#about' className='position-relative text-decoration-none'>about</a></li>
                        <li className='text-uppercase mt-3'><a href='#tline' className='position-relative text-decoration-none'>time line</a></li>
                        <li className='text-uppercase mt-3'><a href='#work' className='position-relative text-decoration-none'>recent work</a></li>
                      </ul>
    
    
    return(

        <div className='position-relative'>
            {/* open nav btn */}
            <input type="checkbox" className="checkbox d-none" id='check' />
            <label className='icon float-left' htmlFor='check'>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </label>

            <aside className='aside-data float-left h-100' >
                <div className='text-center container pt-4'>

                    <div>
                        <img className='author-img' src={pic} alt='author' />
                        <h2 className='font-weight-bold mb-4'>Doaa Mohamed</h2>
                        <p className='mt-2'>
                            <span className="fa fa-envelope-o "></span> doaa35621@gmail.com
                        </p>
                    </div>
                    
                    <div id='main-menu' className='mt-5'>
                        {linkat}
                    </div>

                    <div className='mt-4' >
                        {social}
                    </div>

                    <div className='mt-5 ft-data'>
                        <p>
                            Made with 
                            <i className='fa fa-heart p-1' ></i>
                            and
                            <i className='fa fa-coffee p-1'></i> 
                        </p>
                        <p>Something coming soon !!</p>
                    </div>                                        
                </div>
            </aside>
        </div>
        )
    }

}
export default SideBar;