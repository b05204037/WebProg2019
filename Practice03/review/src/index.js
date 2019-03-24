import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const content = {
    logo: ["Practice", "03"],
    menu: [
        "Homepage",
        "Our Clients",
        "About Us",
        "Careers",
        "Contact Us"
    ],

    columnContent: [
        { header: "column1", content: "Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh." },
        { header: "column2", content: "Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh." },
        { header: "column3", content: "Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh." },
    ],

    updateList: [
        { month: "April", date: "20", header: "Amet sed volutpat mauris", content: "Mauris tempus nibh sodales adipiscing dolore." },
        { month: "April", date: "18", header: "Sagittis diam dolor sit amet", content: "Duis arcu tortor fringilla sed  sed magna." },
        { month: "April", date: "15", header: "Adipiscing sed consequat", content: "Pharetra ac velit sed in volutpat nisl mauris vel." },

    ],

    contactList: [
        ["address", "1234, Somewhere, Road #4285, Nashville, TN 00000"],
        ["mail", "someone@untitled.tld"],
        ["phone", "(000) 000-0000"],
    ],



};

ReactDOM.render(<App content={content} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
