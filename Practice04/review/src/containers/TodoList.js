import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { nowState: "All", leftcount: 0}
    }
    handleClick = (now) => {
        this.setState({ nowState: now });
        console.log("TodoList now " + this.state.nowState)
    }
    render() {
        return (
            <div className="todo-app__root" >
                <header className="todo-app__header">
                    <h1 className="todo-app__title">todos</h1>
                </header>
                <Main nowState={this.state.nowState}/>
                <Footer nowState={this.state.nowState} count={this.state.leftcount} 
                        onClick={this.handleClick} />
            </div>
        );
    }
}

export default TodoList;