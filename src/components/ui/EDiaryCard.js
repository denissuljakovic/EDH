import classes from './EDiaryCard.module.css';

function EDiaryCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default EDiaryCard;
