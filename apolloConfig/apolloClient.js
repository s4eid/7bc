import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
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
          Cookies.remove("refresh");
        }
        if (extensions.code === "CART_ITEMS") {
          store.dispatch(clearCart());
          store.dispatch(addError(message, true));
        }
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} code:${extensions.code}`
        );
      });
    }
    if (networkError) {
      console.log(networkError);
      store.dispatch(addError(networkError.statusCode, true));
    }
  }
);
const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_URI,
  // credentials: "include",
  // fetchOptions: {
  //   credentials: "include",
  // },
});

export default function createApolloClient() {
  console.log(`next publick uri : ${process.env.NEXT_PUBLIC_URI}`);
  console.log(link);
  return new ApolloClient({
    credentials: "same-origin",
    ssrMode: typeof window === "undefined",
    link: link,
    // link: from([errorLink, link]),
    cache: new InMemoryCache(),
    // typePolicies: {
    //   products: {
    //     keyFields: ["product_id"],
    //   },
    // },
  });
}
// export const go = new ApolloClient({
//   link: from([errorLink, link]),
//   credentials: "include",
//   cache: new InMemoryCache({
// typePolicies: {
//   TeacherTests: {
//     keyFields: ["test_id"],
//   },
//   TestResults: {
//     keyFields: ["test_result_id"],
//   },
// },
// }),
// });
