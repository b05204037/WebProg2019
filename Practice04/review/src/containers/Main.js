import React, { Component } from 'react';
// import logo from './logo.svg';
import Item from './../components/Item'
// import { all } from 'q';

let globalid = 0;
let Lists = [];

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { left:0, theList: Lists, nowState: this.props.nowState };
		//this.handleDelete = this.handleDelete.bind(this);
	}
	handleInput = e => {
		if (e.key === "Enter") {
			if (e.target.value !== "") {
				let newitem = { content: e.target.value, itemstate: 0, id: globalid }; //0: active 1: completed 2:deleted
				Lists.push(newitem);
				globalid++;
				e.target.value = "";
				e.target.blur();
				this.setState({ theList: Lists });
			}
		}
	};
	handleComplete = (id) => {
		Lists[id].itemstate = (Lists[id].itemstate === 1) ?  0: 1;
		console.log(id, "completed");
        this.setState({ theList: Lists});
	};
	handleDelete = (id) => {
		// console.log(id);
		// console.log(Lists);
		Lists[id].itemstate = 2;
		// console.log(id, "deleted");
        this.setState({ theList: Lists});
    };
	render() {
		let toshow = (item) => {
			if(this.state.nowState === "All"){
				if(item.itemstate !== 2)
					return true;
			}
			else if(this.state.nowState === "Active"){
				if(item.itemstate === 0)
					return true;
			}
			else if(this.state.nowState === "Completed"){
				if(item.itemstate === 1)
					return true;
			}
			return false;

		}
		let showList = this.state.theList.filter(item => toshow(item))
		console.log(this.state.nowState)
		return (
			<div class="todo-app__root">
				<header class="todo-app__header">
					<h1 class="todo-app__title">todos</h1>
				</header>
				<section className="todo-app__main">
					<Input onKeyPress={this.handleInput}/>
					<List theList={showList} onComplete={this.handleComplete} onDelete={this.handleDelete}/>
				</section>
				<footer class="todo-app__footer">
					<div class="todo-app__total">
						<span id="todo-count">{this.state.left} left</span>
					</div>
					<ul class="todo-app__view-buttons">
						<li><button >All</button></li>|
						<li><button >Active</button></li>|
						<li><button >Completed</button></li>
					</ul>
					<div class="todo-app__clean">
						<button >Clear completed</button>
					</div>
				</footer>
			</div>
		);
	}
}

class List extends Component {
	handleComplete = (id) => {
		this.props.onComplete(id);
	};
	handleDelete = (id) => {
		console.log("in List" + id);
		this.props.onDelete(id);
    };
	render() {
		let listItems = this.props.theList.map( (item) => <Item content={item.content} itemstate={item.itemstate} key={item.id} id={item.id}
															onComplete={this.handleComplete}
															onDelete={this.handleDelete}/>);
		console.log(listItems)
		return (
			<ul className="todo-app__list">
				{listItems}
			</ul>
		);
	}
}

class Input extends Component {
	render() {
		return (
			<input className="todo-app__input"
				type="text"
				placeholder="太忙了,還沒寫好功能QQ"
				onKeyPress={this.props.onKeyPress}
			/>
		);
	}
}

export default Main;