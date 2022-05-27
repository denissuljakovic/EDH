import PostItem from './PostItem';
import classes from './PostList.module.css';

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.all.map((single) => (
        <PostItem
          key={single.id}
          id={single.id}
         text={single.text}
        />
      ))}
    </ul>
  );
}

export default PostList;
