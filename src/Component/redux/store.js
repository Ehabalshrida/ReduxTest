// import reducerCounter from './reducers/Reducer';
// import thunk from"redux-thunk"
// import { createStore, combineReducers ,applyMiddleware} from 'redux';
// import reducerCounter2 from "./reducers/reducer2"
// const reducers=combineReducers({reducerCounter,reducerCounter2})
// console.log(reducerCounter)
//  const enhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// //  const store =createStore(reducers)
// //  const store =createStore(reducers,enhancer(applyMiddleware(thunk)))
//  const store =createStore(reducers,enhancer())

//with ReduxToolKit //
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../ReduxToolkit/CounterRTK'

import counterReducer from '../ReduxToolkit/CounterRTK'

 const store = configureStore({
    reducer: {userReducer,counterReducer},
  })


console.log(store)

export default store;