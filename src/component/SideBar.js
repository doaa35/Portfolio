import React, {Component} from 'react';


class SideBar extends Component{

    // https://github.com/doaa35
    // class="fa fa-facebook"
    // class="fa fa-instagram"
    // class="fa fa-github"



    render(){

        const social = this.props.icons.map( icon =>{
            return(
                <ul key={icon.id} className='list-unstyled'>
                    <a className='text-decorated-none text-dark' href={icon.path}><li className={icon.name}></li></a>
                </ul>
            )
            
        })

console.log(this.props)
console.log(this.props.images[0].image)

        return(
            <aside className='aside-data'>
                <div className='text-center container'>
                    <img className='author-img' src={this.props.images[0].image} alt={this.props.images[0].name} />
                        <h2 className='font-weight-bold'>Doaa Mohamed</h2>
                    <span className="fa fa-envelope-o"> doaa35621@gmail.com</span>

                    <div className='mt-5'>
                        {social}
                    </div>

                    <div className='mt-5'>
                        <p>
                            Made with 
                            <i className='fa fa-heart p-1' ></i>
                            and
                            <i className='fa fa-coffee p-1'></i> 
                            </p>
                    </div>                    

                </div>
                

                
            </aside>
           
        )
    }

}
export default SideBar;