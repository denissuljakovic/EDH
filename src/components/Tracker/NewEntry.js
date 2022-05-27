import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewCal.module.css';

function NewEntry(props) {
  const textInputRef = useRef();
  const dateInputRef=useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    const enteredDate=dateInputRef.current.value;

    const enteredData = {
      text: enteredText,
      date:enteredDate,
    };
    props.onAddPost(enteredData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler} style={{zIndex:"10", position:"relative"}}>
        <div className={classes.control} style={{padding:"10px"}}>
          <h4 style={{padding:"30px"}}><i>Enter your calories  </i></h4>
         {/**<textarea
            id='text'
            required
            rows='10'
            ref={textInputRef}
          ></textarea> */} 
           <input type='text' required id='text' ref={textInputRef} />
            <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input type='date' required id='date' ref={dateInputRef} />
        </div>
        </div>
        <div className={classes.actions} style={{marginLeft:"200px"}}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEntry;
