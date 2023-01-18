import './nav.css'
import blog from '../img/blog.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    console.log("Navbar")
   return(
    <div className="navbar">
        <div className="containerNav">
            <div className="logo">
                <img src={blog} alt="Not uploaded" width='60px' height='60px'/>
            </div>
            <div className="links">
                <Link className='link' to='/?cat=art'>ART</Link>
                <Link className='link' to='/?cat=art'>SCIENCE</Link>
                <Link className='link' to='/?cat=art'>TECHNOLOGY</Link>
                <Link className='link' to='/?cat=art'>CINEMA</Link>
                <Link className='link' to='/?cat=art'>DESIGN</Link>
                <Link className='link' to='/?cat=art'>FOOD</Link>
                <span>John</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to='/write'>Write</Link>
                </span>


            </div>
            </div>
    </div>
   ) 
}
export default Navbar