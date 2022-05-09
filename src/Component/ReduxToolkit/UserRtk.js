import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:10
    },
    reducers: {
      increment1: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.user += 1
      },
      decrement1: (state) => {
        state.user -= 1
      },
      incrementByAmount1: (state, action) => {
        state.user += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment1, decrement1, incrementByAmount1 } = userSlice.actions
  
  export default userSlice.reducer