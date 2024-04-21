import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_WORDPRESS_GRAPHQL_ENDPOINT,
  documents: ["src/queries/**/*"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript-generic-sdk"],
    },
  },
};

export default config;
