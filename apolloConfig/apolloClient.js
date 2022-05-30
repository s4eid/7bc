import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import store from "../Redux/Store/store";
import { addError } from "../Redux/Actions/Error/error";
import { clearCart } from "../Redux/Actions/Product";
import Cookies from "js-cookie";
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        if (extensions.code === "UNAUTHENTICATED") {
          Cookies.remove("refreshToken");
          window.location.reload();
        }
        if (extensions.code === "CART_ITEMS") {
          store.dispatch(clearCart());
          store.dispatch(addError(message, true));
        }
        if (extensions.code === "PAYMENT") {
          store.dispatch(clearCart());
          store.dispatch(addError(message, true));
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} code:${extensions.code}`
        );
      });
    }
    if (networkError) {
      store.dispatch(addError(networkError.statusCode, true));
    }
  }
);
const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_URI,
  credentials: "same-origin",
  headers: {
    Origin: process.env.NEXT_PUBLIC_URL,
  },
  fetchOptions: {
    credentials: "same-origin",
  },
});

export default function createApolloClient() {
  return new ApolloClient({
    credentials: "same-origin",
    ssrMode: typeof window === "undefined",
    link: from([errorLink, link]),
    cache: new InMemoryCache({
      // typePolicies: {
      // products: {
      //   keyFields: ["product_id"],
      // },
      // },
    }),
  });
}
export const go = new ApolloClient({
  link: from([errorLink, link]),
  credentials: "same-origin",
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
