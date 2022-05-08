import React ,{useState}from 'react';
import {INCREASE,DECREASE}from "./redux/actions/action"
import {useSelector,useDispatch}from "react-redux"
function Counter (){
//const [count,setCount]=useState(0);
const counter=useSelector(state=>state.reducerCounter.counter)
const user=useSelector(state=>state.reducerCounter2.user)

 console.log(counter)

const dispatch=useDispatch()

const handleIncreament=()=>{
    dispatch({type:INCREASE})
}
const handleDecreament=()=>{
    dispatch({type:DECREASE})

}
        return (
            <div>
                <button onClick={handleIncreament}>+</button>
                {counter}
              {user}
                <button onClick={handleDecreament}>-</button>

                
            </div>
        );
}

export default Counter;