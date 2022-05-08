import reducerCounter from './reducers/Reducer';
import { createStore, combineReducers } from 'redux';
import reducerCounter2 from "./reducers/reducer2"
const reducers=combineReducers({reducerCounter,reducerCounter2})
console.log(reducerCounter)

const store =createStore(reducers)
console.log(store)

export default store;