import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_WORDPRESS_GRAPHQL_ENDPOINT,
  generates: {
    "src/gql/": {
      preset: "client",
      config: { enumsAsConst: true },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
    },
    "src/gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
