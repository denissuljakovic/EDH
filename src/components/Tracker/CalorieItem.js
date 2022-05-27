import classes from './Cal.module.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import EDiaryCard from '../ui/EDiaryCard';

function PostItem(props){
    return(
<li className={classes.item}>
              <EDiaryCard>
                <div className={classes.content}>
                  <div style={{border: "1px solid", width:"auto", height:"150px", marginLeft:"0", padding:"20px", zIndex:"10", backgroundColor:"white"}}>{props.date}, {props.text}</div> 
                </div>
              </EDiaryCard>
            </li>
    );
}
export default PostItem;