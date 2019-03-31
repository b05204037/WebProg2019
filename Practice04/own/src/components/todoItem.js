import React from "react";
import x from "./x.png";
class Todoitem extends React.Component {
  constructor(props) {
    super(props);

    this.createline = this.createline.bind(this);
  }

  createline(items) {
    return (
      <li className="todo-app__item">
        <div className="todo-app__checkbox">
          <input id={items.key} type="checkbox" />
          <label htmlFor={items.key} />
        </div>
        <h1 className="todo-app__item-detail">{items.value}</h1>;
        <img
          src={x}
          className="todo-app__item-x"
          onClick={() => this.delete(items.key)}
        />
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoentries = this.props.entries;
    var list = todoentries.map(this.createline);

    return list;
  }
}

export default Todoitem;
