import React from 'react'
export default ({ img_src , text }) => {
    return (
    <div className = "card">
        <h2>About Me</h2>
        <div className = "fakeimg" style={ {height:'100px'} } >
            <img src = {img_src} /> </div>
        <p>{ text }</p>
    </div>
    );
}