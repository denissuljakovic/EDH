import CalorieItem from './CalorieItem';
import classes from './CalorieList.module.css';

function CalorieList(props) {
  return (
    <ul className={classes.list}>
      {props.all.map((single) => (
        <CalorieItem
          key={single.id}
          id={single.id}
         text={single.text}
         date={single.date}
        />
      ))}
    </ul>
  );
}

export default CalorieList;
