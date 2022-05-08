import { INCREASE,DECREASE } from "../actions/action"

const initlalState={
    counter:5
}

 function reducerCounter(state=initlalState,action){

 switch(action.type){
 case(INCREASE):
 return ({...state,counter:state.counter+1});

 case(DECREASE):

 return ({...state,counter:state.counter-1})

default:
return (state)
    }

}
export default reducerCounter