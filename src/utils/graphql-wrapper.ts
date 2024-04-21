import { getSdk } from "~/gql/graphql";
import { requester } from "./api";

export interface Options {
  token: string;
}

export const graphqlSdk = getSdk<Options>(requester);
