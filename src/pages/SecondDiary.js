import NewPost from '../components/ediary/NewPost';
import {useHistory} from "react-router-dom";
import "./SEdiary.css"
import bck from './bck.jpg';
function SecondDiary() {
const history=useHistory();

  function addSignupHandler(enteredData){
  fetch("https://seproject-48a28-default-rtdb.firebaseio.com/post.json",
  {method:"POST", 
  body: JSON.stringify(enteredData),
  headers: {"Content-Type":"application/json"
}
  }).then(()=>{
    history.replace("/eDiary");
  });}
  return (<div style={{zIndex:"10", position:"relative"}}> <div >
    <img src={bck} style={{position:"absolute", width:"100%", height:"670px", opacity:"0.8", display:"flex", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
      
    </img>

 </div>
   <div className="output" style={{zIndex:"10", position:"relative"}}> 
    <section>
      <NewPost onAddPost={addSignupHandler} />
    </section></div> </div>
  );
}

export default SecondDiary;