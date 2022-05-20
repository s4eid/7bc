import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { pool } from "../../db/index";
import { jwtCheck } from "../../Functions/jwtCheck/jwtCheck";
import typeUser from "../../graphql/user/user_type";
import resolverUser from "../../graphql/user/user_resolver";
import typeProduct from "../../graphql/product/typeProduct";
import resolverProduct from "../../graphql/product/resolverProduct";
import typeOrder from "../../graphql/order/order_type";
import resolverOrder from "../../graphql/order/order_resolver";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import pkg from "graphql";

const cors = Cors({
  allowCredentials: true,

  origin: process.env.URLL,
});
// const schema = makeExecutableSchema({
//   typeDefs: [typeUser, typeProduct, typeOrder],
//   resolvers: [resolverUser, resolverProduct, resolverOrder],
// });

const apolloServer = new ApolloServer({
  // schema,
  resolvers: [resolverUser, resolverProduct, resolverOrder],
  typeDefs: [typeUser, typeProduct, typeOrder],
  csrfPrevention: true,
  context: async ({ req, res }) => {
    let user = null;
    // console.log(req);
    // const token = req.cookies || "";
    // if (token) {
    //   user = await jwtCheck(token, pool, res);
    // }
    // console.log(user);
    return { pool, req, res, user };
    // return { pool, req, res };
  },
});

const startServer = apolloServer.start();
export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
