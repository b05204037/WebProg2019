import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";

import React, { Component } from "react";
import "./Post.css";
class UsersPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOnclick: false
    };
  }

  buttomClick = () => {
    console.log(this.props.data);
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

  render() {
    return (
      <Card style={{ margin: "30px auto", width: "400px" }}>
        <CardHeader>
          {this.props.data.name}
          <button
            style={{ position: "absolute", right: "20px" }}
            onClick={this.buttomClick}
          >
            See more...
          </button>
        </CardHeader>
        <CardBody className={`${!this.state.ifOnclick ? "disable" : "able"}`}>
          {this.props.data.posts.map((post, id) => (
            <p>
              {post.title}:{post.body}
            </p>
          ))}
        </CardBody>
      </Card>
    );
  }
}
export default UsersPost;
