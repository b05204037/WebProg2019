import React , { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class CompleteArticle extends Component {
    render() {
        const { title } = this.props.match.params ;
        return(
            <div>
                <article >
                    <h1>{title}</h1>
                    <p className = "Articles">some text...some text...some text...some text...
                    some text...some text...some text...some text... </p> 
                </article>
                <footer className = "ftop" >
                    <p><NavLink to = "/home">Back</NavLink></p>
                </footer>
            </div>
        );
    }
}