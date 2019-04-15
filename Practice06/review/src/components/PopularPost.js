import React from 'react' ;
export default ({ img_src1 , img_src2 , img_src3 }) => {
    return (
        <div className ="card">
            <h3>Popular Post</h3>
            <div className ="fakeimg"> 
                <img src = {img_src1} alt = {"pop1"} />  </div><br/>
            <div className ="fakeimg">
                <img src = {img_src2} alt = {"pop2"} />  </div><br/>
            <div className ="fakeimg">
                <img src = {img_src3} alt = {"pop3"} />  </div><br/>
        </div>
    ) ;
}