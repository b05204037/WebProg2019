import React from 'react'
import { NavLink , Switch , Route } from 'react-router-dom' ;
export default ({ Title_Head , Title_Desc , img_src , text }) => {
    return ( 
    <div>
        <div className = "card">
            <h2> 
                <NavLink to = {"/articles/" + Title_Head } >
                    { Title_Head } 
                </NavLink >  </h2>
            <h5>{ Title_Desc } </h5>
            <div className = "fakeimg" style = { {height: '200px'} } >
                <img    src = { img_src } alt = "Image" />
            </div>
            <p>{ text } </p>
        </div>
    </div>
    ) ;
}