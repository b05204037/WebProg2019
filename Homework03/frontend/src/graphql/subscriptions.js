import { gql } from "apollo-boost";

const POSTS_SUBSCRIPTION = gql`
  subscription {
    post {
      mutation
      data {
        title
        body
        author {
          name
        }
        published
      }
    }
  }
`;

const UserSubscription = gql`
  subscription {
    user {
      mutation
      data {
        name
        id
        posts {
          title
          body
        }
      }
    }
  }
`;
export { POSTS_SUBSCRIPTION, UserSubscription };
