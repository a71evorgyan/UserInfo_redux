import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './Components/UserInfo';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './data.json';

const initialState = {
    userInfo: {}
}
  
function reducer(state = initialState, action){
    let result = data.find(user => user.userId === action.id);
    switch(action.type) {
    
        case "GETINFO":
          return {
            ...state,
            userInfo: result,
        }
        default:
          return state;
      }
    
}


const store = createStore(reducer);
const App = () => {
    return (<Provider store={store}>
        <UserInfo />
    </Provider>);
};

render(
    <App />, document.getElementById('root')
);

