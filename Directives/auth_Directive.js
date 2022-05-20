// import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
// import { AuthenticationError } from "apollo-server-errors";
// import { defaultFieldResolver } from "graphql";

// export default function authDirective(schema, directiveName) {
//   return mapSchema(schema, {
//     [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
//       const upperDirective = getDirective(
//         schema,
//         fieldConfig,
//         directiveName
//       )?.[0];
//       if (upperDirective) {
//         const { resolve = defaultFieldResolver } = fieldConfig;
//         fieldConfig.resolve = async function (source, args, context, info) {
//           const result = await resolve(source, args, context, info);
//           if (context.user?.email) {
//             return result;
//           } else {
//             throw new AuthenticationError("Auth is Required For This Field");
//           }
//         };
//         return fieldConfig;
//       }
//     },
//   });
// }
