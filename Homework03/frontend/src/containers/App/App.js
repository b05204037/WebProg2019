import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import {
  POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION,
  AuthorQuery,
  AuthorPostQuery,
  UserSubscription
} from "../../graphql";
import Post from "../../components/Post/Post";
import UsersPost from "../../components/Post/UsersPost";
import classes from "./App.module.css";

let unsubscribe = null;

class App extends Component {
  state = {
    fromAuthorId: "",
    formTitle: "",
    formBody: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { formTitle, formBody, fromAuthorId } = this.state;

    if (!formTitle || !formBody || !fromAuthorId) return;

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: fromAuthorId
      }
    });

    this.setState({
      formTitle: "",
      formBody: ""
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost;

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="Author" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>
                        <Query query={AuthorQuery}>
                          {({ loading, error, data }) => {
                            if (loading)
                              return <option>Loading Author...</option>;
                            if (error) return <option>Error:((</option>;
                            const AuthorList = data.users.map(user => {
                              return (
                                <option key={user.id} value={user.id}>
                                  {user.name}
                                </option>
                              );
                            });
                            return (
                              <select
                                onChange={e => {
                                  this.setState({
                                    fromAuthorId: e.target.value
                                  });
                                }}
                              >
                                <option>Select Author...</option>
                                {AuthorList}
                              </select>
                            );
                          }}
                        </Query>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                );
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(((</p>;
                console.log(data);
                const Andrewposts = data.posts.filter(post => {
                  return post.author.name === "Andrew";
                });
                console.log(Andrewposts);
                const Sarahposts = data.posts.filter(post => {
                  return post.author.name === "Sarah";
                });
                const Mikeposts = data.posts.filter(post => {
                  return post.author.name === "Mike";
                });

                const Apost = <Post data={Andrewposts} Name="Andrew" />;
                const Spost = <Post data={Sarahposts} Name="Sarah" />;
                const Mpost = <Post data={Mikeposts} Name="Mike" />;

                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev;
                      const newPost = subscriptionData.data.post.data;

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      };
                    }
                  });

                return (
                  <div>
                    <div>{Apost}</div>
                    <div>{Spost}</div>
                    <div>{Mpost}</div>
                  </div>
                );
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
