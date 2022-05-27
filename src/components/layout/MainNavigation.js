import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import pic2 from './Copy.png';
import { AiOutlineHome } from "react-icons/ai";


import { useHistory } from "react-router-dom";
import arrow from './arrow.png';


function MainNavigation() {
  let history = useHistory();
  return (
    <header className={classes.header} style={{zIndex:"10", position:"relative",marginTop:"10px", marginLeft:'50px'}}>
      
      <nav>
         
        <ul>
        <li className={classes.logo}><img src={pic2} style={{marginLeft:"-35%"}} /> </li>
          <li style={{zIndex:"10", position:"relative",marginLeft:"80%"}}>
            <Link to='/mainpage'> <AiOutlineHome /> Home </Link>
          
          </li>

          <li><button onClick={() => history.goBack()} id="btn"><img src={arrow} style={{width:"40px",height:"30px",marginTop:"20px"}} /></button></li>
{/**
 * <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li><li>
            <Link to='/login'>Sign Out</Link>
          </li>
 * 
 */}
 
    
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;