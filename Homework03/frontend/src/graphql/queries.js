import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  query {
    posts {
      title
      body
      author {
        name
      }
      published
    }
  }
`;

const AuthorQuery = gql`
  query {
    users {
      name
      id
    }
  }
`;

const AuthorPostQuery = gql`
  query {
    users {
      name
      id
      posts {
        title
        body
      }
    }
  }
`;

export { POSTS_QUERY, AuthorQuery, AuthorPostQuery };
