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
// import { getSession } from "next-auth/react";
// import {getServerSession} from "next-auth"
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
    let _user = null;
    // let _user = req.cookies?.__Secure - next - auth?.session - token;
    // const googleUser = await getSession({ req });
    // _user = googleUser?.user ? googleUser.user : null;
    const _token = req.cookies || "";
    if (_token) {
      user = await jwtCheck(_token, pool, res);
    }
    return { pool, req, res, user, _user };
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
