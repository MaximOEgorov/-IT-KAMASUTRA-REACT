import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";


let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
