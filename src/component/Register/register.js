import '../Login/style.css'
import {Link} from 'react-router-dom'
function Register() {
    console.log("Login");
    return(
     <div className='login'>
         <h1>Register</h1>
         <form>
            <input required type="text" placeholder="username"/>
            <input required type="text" placeholder="email"/>
            <input required type="password" placeholder="password"/>
            <button>Register</button>
            <p>This is an error!</p>
            <span>Don't you have an account ?<Link to="/login">Login</Link></span>
         </form>
     </div>
    ) 
 }
 export default Register