import gql from "graphql-tag";
import type { Post } from "~/gql/graphql";
import { graphqlSdk } from "~/utils/graphql-wrapper";

export const getAllPosts = async () => {
  const data = await graphqlSdk.AllPosts();
  return (data.posts?.edges.map((edge) => edge.node) || []) as Post[];
};

const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;

gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;
