import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";

import React, { Component } from "react";
import "./Post.css";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOnclick: false
    };
  }

  buttomClick = () => {
    if (this.state.ifOnclick == false) {
      this.setState({
        ifOnclick: true
      });
    } else {
      this.setState({
        ifOnclick: false
      });
    }
  };

  countNum = num => {
    if (num == 0) {
      return "No Post Yet... :((((((";
    } else {
      return `See more ${num} posts ...`;
    }
  };

  render() {
    return (
      <Card
        style={{
          margin: "30px auto",
          width: "400px"
        }}
      >
        <CardHeader className="Head">
          {this.props.Name}
          <button
            className="button"
            style={{ position: "absolute", right: "20px" }}
            onClick={this.buttomClick}
          >
            {this.countNum(this.props.data.length)}
          </button>
        </CardHeader>
        <CardBody className={`${!this.state.ifOnclick ? "disable" : "able"}`}>
          {this.props.data.map((post, id) => (
            <div className="Post">
              <p style={{ marginBottom: "0px" }}>
                <b>Title : </b>
                {post.title}
              </p>
              <p>
                <b>Post : </b>
                {post.body}
              </p>
            </div>
          ))}
        </CardBody>
      </Card>
    );
  }
}
export default Post;
