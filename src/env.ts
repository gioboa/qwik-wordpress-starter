import { object, parse, string } from 'valibot';

const EnvVariablesSchema = object({
  VITE_WORDPRESS_GRAPHQL_ENDPOINT: string(),
});

export const ENV_VARIABLES = parse(EnvVariablesSchema, import.meta.env);
