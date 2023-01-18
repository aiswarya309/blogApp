import './style.css'
import {Link} from 'react-router-dom'
function Login() {
    console.log("Login");
    return(
     <div className='login'>
         <h1>Login</h1>
         <form>
            <input required type="text" placeholder="Username"/>
            <input required type="password" placeholder="Password"/>
            <button>Login</button>
            <p>This is an error!</p>
            <span>Don't you have an account ?<Link to="/register">Register</Link></span>
         </form>
     </div>
    ) 
 }
 export default Login