//import classes from './src/components/loginp/LoginItem.module.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import pic from '../prvaslika.png';
import video1 from './video.mp4';
function FirstPage(props){
    return(
        
//<div claasName={classes.action}>          
<div ><div >
      <video loop autoPlay style={{position:"absolute", height:"100%", width:"100%", opacity:"0.7", display:"flex", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
        <source
          src={video1}
          type="video/mp4"
        />
      </video>
    </div>
    <img src={pic} style={{marginLeft:"40%"}}/> 
{/** <div><video loop src={video1} position="absolute" width="100%" height="100%" controls="controls" opacity="0.5" display="flex" top="0" object-fit="cover" autoplay="true"  /> </div>
 */}


<div id="prijava" style={{textAlign: "center", marginLeft:"700px"}}>
<Link to='/login'> <Button variant="secondary" size="lg" ><h3 style={{zIndex:"10", position:'relative'}}> Log in </h3>
  
  </Button></Link>
  {/**<Link to='/signup'> <Button variant="secondary" size="lg">Sign up</Button></Link>  */}
  </div>
</div>
//</div>
    );
}
export default FirstPage;

