import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { pool } from "../../db/index";
import typeUser from "../../graphql/user/user_type";
import resolverUser from "../../graphql/user/user_resolver";
import typeProduct from "../../graphql/product/typeProduct";
import resolverProduct from "../../graphql/product/resolverProduct";
import typeOrder from "../../graphql/order/order_type";
import resolverOrder from "../../graphql/order/order_resolver";

const cors = Cors({
  // origin: process.env.URL,
  allowCredentials: true,
});

const apolloServer = new ApolloServer({
  resolvers: [resolverUser, resolverProduct, resolverOrder],
  typeDefs: [typeUser, typeProduct, typeOrder],
  csrfPrevention: true,
  context: async ({ req, res }) => {
    return { pool, req, res };
  },
});

const startServer = apolloServer.start();
export default cors(async function handler(req, res) {
  console.log(`cors ${cors}`);
  console.log("in function of server");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  console.log(`start sersver ${startServer}`);
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
// export default async function handler(req, res) {
//   console.log(`cors ${cors}`);
//   console.log("in function of server");
//   if (req.method === "OPTIONS") {
//     res.end();
//     return false;
//   }
//   await startServer;
//   console.log(`start sersver ${startServer}`);
//   await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
// }

export const config = {
  api: {
    bodyParser: false,
  },
};
