// import React ,{useState}from 'react';
// import {INCREASE,DECREASE}from "./redux/actions/types"
// import {useSelector,useDispatch}from "react-redux"
// import {encreaseByValue}from'./redux/actions/ActionCreator'
// import{encreaseeByValue}from './redux/actions/ActionWithThunk'
//redux tool kit logic

import {useSelector,useDispatch}from "react-redux"
import { increment, decrement, incrementByAmount } from './ReduxToolkit/CounterRTK'
import { increment1, decrement1, incrementByAmount1 } from './ReduxToolkit/UserRtk'

//end of redux tool kit logic
function Counter (){
//const [count,setCount]=useState(0);

// const {counter}=useSelector(state=>state)//when you have only one reducer in the store 

/* const user=useSelector(state=>state.reducerCounter2.user) when you have more than one reducer
in the store and you want to use just one of the reduser
*/
// const {reducerCounter:{counter},reducerCounter2:{user}}=useSelector(state=>state)
/*
when you have more than one reducer
in the store and you want to use all the redusers
*/


/*
store === state
state={reducerCounter:{counter},reducerCounter2:{user}}
 */
//  console.log(counter)

// const dispatch=useDispatch()

// const handleIncreament=()=>{
//     dispatch({type:INCREASE})
// }
// const handleDecreament=()=>{
//     dispatch({type:DECREASE})

// }

// const EncreaseByValue=(v)=>{
//     dispatch(encreaseByValue(v))
// }

// const EncreaseByValue=(v)=>{
//     encreaseeByValue(v,dispatch)}
//logic with Redux ToolKit
const dispatch=useDispatch()
const {userReducer:{user},counterReducer:{value}}=useSelector(state=>state)

const handleIncreament1=()=>{
dispatch(increment1())
}

const handleDecreament1=()=>{
dispatch(decrement1())

}


const EncreaseByValue1=(v)=>{
    dispatch(incrementByAmount1(v))

}

const handleIncreament=()=>{
    dispatch(increment())
    }
    
    const handleDecreament=()=>{
    dispatch(decrement())
    
    }
    
    
    const EncreaseByValue=(v)=>{
        dispatch(incrementByAmount(v))
    
    }

        return (
            <div>
                <button onClick={handleIncreament}>+</button>
                 {value}<br/>
                 <button onClick={handleDecreament}>-</button> 
                 
                 <button onClick={()=>{EncreaseByValue(5)}}>EncreasBy5</button> 
                 
                <button onClick={handleIncreament1}>+</button>
               {user} 
                 <button onClick={handleDecreament1}>-</button> 
                 
                 <button onClick={()=>{EncreaseByValue1(5)}}>EncreasBy5</button> 

                
            </div>
        );
}

export default Counter;