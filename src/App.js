import logo from './logo.svg';
import './App.css';
import Home from './component/Home/home';
import Login from './component/Login/login';
import Register from './component/Register/register';
import Single from './component/Single/single';
import Write from './component/Write/write';
import Footer from './component/Footer/footer';
import Navbar from './component/Navbar/navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className='myapp'>
     <Router>
          {/* <Navbar/>  */}
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <>
          <Navbar/> 
          <Route path='/' component={Home} exact/>
          <Route path='/single/:id' component={Single} />
          <Route path='/write' component={Write} />
          <Footer/> 
        </>
        </Switch>
          {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
