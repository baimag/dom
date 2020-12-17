import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import {Provider, useDispatch} from "react-redux";
import thunk from "redux-thunk";
import "./style.css"
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.css"

const initialState = {
    id: null
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
