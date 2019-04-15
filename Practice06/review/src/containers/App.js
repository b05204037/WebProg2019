import React, { Component , Fragment }  from 'react';
import { BrowserRouter } from 'react-router-dom' ;
import { NavLink , Switch , Route , Redirect } from 'react-router-dom' ;
import All_Articles from '../components/A_Articles.js'; 
import Right_Column from '../components/Right_Column.js'

import CompleteArticle from './Articles/CompleteArticle.js'
import '../App.css';



class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Blog Arc = { this.props.Arc } />
			</BrowserRouter>
		)
	}
}

class Blog extends Component {
	render() {
		return (
		<Fragment>
		<div className ="header">
    		<h2>Blog</h2>
		</div>

		<Switch>
			<Route path = "/articles/:title?" component = { CompleteArticle } />
			<Redirect from = "/home" to = "/" />
			<Fragment>
			<div className = "row">			
				<All_Articles Arcs = {this.props.Arc} />

				<Right_Column 	img_src_myself = "./image"
								text_myself = "some text about myself" 
								img_src1 = "./image"
								img_src1 = "./image"
								img_src1 = "./image"  
								text = "some text..." />
			</div>
			<div className ="footer">
				<h2>Footer</h2>
			</div>
			</Fragment>
		</Switch>

		

		</Fragment>
		);
	}
}

export default App ;
