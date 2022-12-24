const { mapSchema, getDirective, MapperKind } = require("@graphql-tools/utils");
import { GraphQLSchema, defaultFieldResolver, GraphQLError } from "graphql";
import { Context } from "~/context";

export const authDirectiveTransformer = (
  schema: GraphQLSchema,
  directiveName = "auth"
): GraphQLSchema => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig: any) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async (
          root: unknown,
          args: unknown,
          context: Context,
          info: unknown
        ) => {
          if (!context.firebaseId) {
            throw new GraphQLError("User is not authenticated", {
              extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
              },
            });
          }
          return resolve(root, args, context, info);
        };
      }
      return fieldConfig;
    },
  });
};
