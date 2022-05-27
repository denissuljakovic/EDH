import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewPost.module.css';

function NewPost(props) {
  const textInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredText = textInputRef.current.value;

    const enteredData = {
      text: enteredText,
    };
    props.onAddPost(enteredData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='text'><h4 style={{padding:"30px"}}><i>eDiary- Your personal diary  </i></h4></label>
          <textarea
            id='text'
            required
            rows='10'
            ref={textInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPost;
