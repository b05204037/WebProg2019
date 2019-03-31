import React from "react";
import Todoitem from "../components/todoItem";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: []
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  enter = event => {
    let content = event.target.value;
    if (event.key === "Enter" && content !== "") {
      //console.log(event.target.value);
      var newItem = {
        value: content,
        ifComplete: false,
        key: Date.now()
      };
      console.log(this.state);
      this.setState(prevState => {
        return {
          todoItem: prevState.todoItem.concat(newItem)
        };
      });
      event.target.value = "";
    }
  };

  deleteItem(key) {
    var filterItem = this.state.todoItem.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      todoItem: filterItem
    });
  }

  render() {
    return (
      <div id="root" className="todo-app__root">
        <header className="todo-app__header">
          <h1 className="todo-app__title">todos</h1>
        </header>
        <section className="todo-app__main">
          <input
            id="todo-input"
            className="todo-app__input"
            type="text"
            placeholder="What needs to be done?"
            onKeyUp={this.enter}
          />
        </section>
        <ul className="todo-app__list" id="todo-list" />
        <Todoitem entries={this.state.todoItem} delete={this.deleteItem} />
        <footer className="todo-app__footer">
          <div id="total" className="todo-app__total" />
          <ul className="todo-app__view-buttons">
            <button id="all">All</button>
            <button id="active">Active</button>
            <button id="complete">Completed</button>
          </ul>
          <div className="todo-app__clean">
            <button id="clear">Clear</button>
          </div>
        </footer>
      </div>
    );
  }
}
export default Todo;
