import React from 'react';
import UserInfo from './containers/UserInfo';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/updateInfo'


const mystore = createStore(reducer);
console.log(mystore.getState());
const App = () => {
    return (
    <Provider store={mystore}>
        <UserInfo />
    </Provider>);   
};

render(
    <App />, document.getElementById('root')
);

