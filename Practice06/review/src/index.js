import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Title_Head , Title_Desc , img_src , text
var Items = [];
Items = [
    {   Title_Head : "Today" , 
        Title_Desc : "Dec , 9"  , 
        img_src : "./image/", 
        text : "some text..."
    } ,
    {   Title_Head : "Yesterday" , 
        Title_Desc : "Jan , 24"  , 
        img_src : "./image/", 
        text : "some text...some text...some text...some text...some text..."
    }
] 

ReactDOM.render(<App Arc={Items}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
