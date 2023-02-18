import { configureStore } from '@reduxjs/toolkit';

import { myValueSlice } from './myValue/Slice';
import { itemsSlice } from './itemsSlice/Slice';
import { userSlice } from './userSlice';

//export const increment = createAction('myCounter/increment') // action
//console.log(increment(100))
//console.log(increment.toString())
//export const decrement = createAction('myDecrement/decrement') // action

/*const myReducer = createReducer(10, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload, 
})*/

/*const itemsReducer = createReducer([], {
    [add]: (state, action) => state.push(action.payload),
    [remove]: (state, action) => state.filter(item => item.id !== action.payload)
})*/

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer, // state
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});
