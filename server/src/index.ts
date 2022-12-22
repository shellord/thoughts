import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { createContext } from "./context";
import "./lib/init";
import { authDirectiveTransformer } from "./directives/auth-directive";

const typeDefs = readFileSync(__dirname + "/schema.graphql", "utf8");

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

schema = authDirectiveTransformer(schema, "auth");

const server = new ApolloServer({
  schema,
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
})();
