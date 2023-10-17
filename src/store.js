// import {createStore, combineReducers} from "redux"
// import todoReducers from "./reducers/todoReducers"

// const reactDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(combineReducers({todos: todoReducers}), {}, reactDevToolEnhancer)
// export default store;



// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './reducers/todoReducer';
import todoSlice from './slices/todoSlice.js';
// const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(combineReducers({todos: todoReducer}), {}, reduxDevToolEnhancer);
const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
    devTools: true
});
export default store;