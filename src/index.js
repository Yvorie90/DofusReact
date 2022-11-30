import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




const initialState = [
  {
    id : 1,
    title : "caca",
    complated : false
  },
  {
    id : 2,
    title : "pipi",
    complated : true
  }
]

let id = 3;

const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

function TodoReducer (state = initialState, action){
  switch (action.type){
    case ADD_TODO_ACTION: 
    return [...state, {id:id++, complated : false, ...action.playload}]

    default:
      return state

  }

}


const state = TodoReducer(undefined,{})
const newstate = TodoReducer(state, {type: ADD_TODO_ACTION, playload:{title:"truc"}})
//console.log(state)
//console.log(newstate)

const store = createStore(TodoReducer)
console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))
store.dispatch({type:ADD_TODO_ACTION, playload:{title:"AAAAAH"}})