import React from 'react';
import Article from './Article.js'

export default ({ Arcs }) => {
    const arclist = [];
    Arcs.forEach( ( ele, index ) => {
        arclist.push(
        <Article    
            key = {index}
            Title_Head = { ele.Title_Head }
            Title_Desc = { ele.Title_Desc }
            img_src = { ele.img_src }
            text = { ele.text } /> )
    } ) ;
   
    return (
        <div className = "leftcolumn">
            {arclist}
        </div>
    );
}
