import NewSignUpForm from '../components/signupp/NewSignUpForm';
import {useHistory} from "react-router-dom";

function NewCal() {
const history=useHistory();

  function addSignupHandler(signupData){
  fetch("https://edhealth-8e781-default-rtdb.firebaseio.com//.json",
  {method:"POST", 
  body: JSON.stringify(signupData),
  headers: {"Content-Type":"application/json"
}
  }).then(()=>{
    history.replace("/mainpage");
  });}
  return (
    <section>
      <NewSignUpForm onAddSignup={addSignupHandler} />
    </section>
  );
}

export default NewCal;