import { server$ } from "@builder.io/qwik-city";
import { isBrowser } from "@builder.io/qwik/build";
import type { DocumentNode } from "graphql/index";
import { print } from "graphql/index";
import { ENV_VARIABLES } from "~/env";

type ExecuteProps<V> = { query: string; variables?: V };
type Options = {
  method: string;
  headers: Record<string, string>;
  body: string;
};

export const requester = async <R, V>(
  doc: DocumentNode,
  vars?: V,
): Promise<R> => {
  return execute<R, V>({ query: print(doc), variables: vars });
};

const execute = async <R, V = Record<string, any>>(
  body: ExecuteProps<V>,
): Promise<R> => {
  const requestOptions = {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  return isBrowser && !import.meta.env.DEV
    ? await executeOnTheServer(requestOptions)
    : await executeRequest(requestOptions);
};

const createHeaders = () => {
  let headers: Record<string, string> = { "Content-Type": "application/json" };
  if (isBrowser) {
    headers = { ...headers };
  }
  return headers;
};

const executeOnTheServer = server$(async (options: Options) =>
  executeRequest(options),
);

const executeRequest = async (options: Options) => {
  let httpResponse: Response = new Response();
  const gqlEndpoint = ENV_VARIABLES.VITE_WORDPRESS_GRAPHQL_ENDPOINT;
  try {
    httpResponse = await fetch(gqlEndpoint, options);
  } catch (error) {
    console.error(`Could not fetch from ${gqlEndpoint}. Reason: ${error}`);
  }
  return await extractData(httpResponse, gqlEndpoint);
};

const extractData = async (response: Response, apiUrl: string) => {
  if (response.body === null) {
    console.error(`Empty request body for a call to ${apiUrl}`);
    return {};
  }

  const { data, errors } = await response.json();
  if (errors && !data) {
    throw new Error(errors[0].message);
  }

  return data;
};
