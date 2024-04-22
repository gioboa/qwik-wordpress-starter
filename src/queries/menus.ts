import gql from "graphql-tag";
import { graphqlSdk } from "~/utils/graphql-wrapper";

export const allMenus = async () => await graphqlSdk.AllMenus();

gql`
  query AllMenus {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
