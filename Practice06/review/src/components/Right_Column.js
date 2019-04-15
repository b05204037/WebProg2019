import React from 'react';
import IntroMyself from '../components/IntroMyself.js' ;
import PopularPost from '../components/PopularPost.js' ;
import FollowMe from '../components/Follow.js'

export default ({img_src_myself ,text_myself , img_src1 , img_src2 , img_src3 ,text }) =>{
    return (
        <div className ="rightcolumn">
			<IntroMyself 	img_src = {img_src_myself}
							text = {text_myself} />
			<PopularPost    img_src1 = {img_src1}
							img_src1 = {img_src2}
							img_src1 = {img_src3}  />
			<FollowMe 		text = {text} />
		</div>
    )
}