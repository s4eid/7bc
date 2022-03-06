import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import Cookies from "js-cookie";

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    // if (graphQLErrors) {
    //   graphQLErrors.forEach(({ message, locations, path, extensions }) => {
    //     if (extensions.code === "UNAUTHENTICATED") {
    //       Cookies.remove("refresh");
    //     }
    //     console.log(
    //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} code:${extensions.code}`
    //     );
    //   });
    // }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);
const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_URI,
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});

export default function createApolloClient() {
  return new ApolloClient({
    credentials: "include",
    ssrMode: typeof window === "undefined",
    link: from([errorLink, link]),
    cache: new InMemoryCache({
      typePolicies: {
        products: {
          keyFields: ["product_id"],
        },
      },
    }),
  });
}
export const go = new ApolloClient({
  link: from([errorLink, link]),
  credentials: "include",
  cache: new InMemoryCache({
    // typePolicies: {
    //   TeacherTests: {
    //     keyFields: ["test_id"],
    //   },
    //   TestResults: {
    //     keyFields: ["test_result_id"],
    //   },
    // },
  }),
});
