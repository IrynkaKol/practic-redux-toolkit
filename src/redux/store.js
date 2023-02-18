import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 10,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

//export const increment = createAction('myCounter/increment') // action
//console.log(increment(100))
//console.log(increment.toString())
//export const decrement = createAction('myDecrement/decrement') // action

/*const myReducer = createReducer(10, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload, 
})*/

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { add, remove } = itemsSlice.actions;

/*const itemsReducer = createReducer([], {
    [add]: (state, action) => state.push(action.payload),
    [remove]: (state, action) => state.filter(item => item.id !== action.payload)
})*/

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer, // state
    items: itemsSlice.reducer,
  },
});
