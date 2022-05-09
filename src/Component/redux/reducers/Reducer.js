import { INCREASE,DECREASE } from "../actions/types"

const initlalState={
    counter:5
}

 function reducerCounter(state=initlalState,action){

 switch(action.type){
 case(INCREASE):
 return ({...state,counter:state.counter+1});

 case(DECREASE):

 return ({...state,counter:state.counter-1})
 
 case('encreaseByValue'):

 return ({...state,counter:state.counter + action.payload})

default:
return (state)
    }

}
export default reducerCounter