import { INCREASE,DECREASE } from "../actions/types"

const initlalState={
    user:10
}

 function reducerCounter2(state=initlalState,action){

 switch(action.type){
 case(INCREASE):
 return ({...state,user:state.user+1});

 case(DECREASE):

 return ({...state,user:state.user-1})
 
 case('encreaseByValue'):

 return ({...state,user:state.user + action.payload})


default:
return (state)
    }

}
export default reducerCounter2