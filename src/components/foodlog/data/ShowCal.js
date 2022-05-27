import FoodLog from "../FoodLog";
import TotalCalories from "../components/total-calories";
const showCal = (props)=>{
    return (<div>
<p>
    {props.totalCalories}, {props.calText}
</p>
    </div>)
};
export default showCal;