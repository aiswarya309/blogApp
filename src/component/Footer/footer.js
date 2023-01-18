import blog from '../img/blog.jpg'
import './footer.css'
function Footer() {
   return(
    <footer>
        <img src={blog} alt='Image is not uploaded' width='60px' height='60px'/>
        <span>Made with love and <b>React.js</b></span>
    </footer>
   ) 
}
export default Footer