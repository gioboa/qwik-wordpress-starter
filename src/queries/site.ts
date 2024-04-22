import gql from "graphql-tag";
import { graphqlSdk } from "~/utils/graphql-wrapper";

export const siteData = async () => await graphqlSdk.SiteData();
export const seoData = async () => await graphqlSdk.SeoData();

gql`
  query SiteData {
    generalSettings {
      description
      language
      title
    }
  }
`;

gql`
  query SeoData {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;
