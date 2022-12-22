import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers";
import { createContext } from "./context";
import "~/lib/init";

const typeDefs = readFileSync(__dirname + "/schema.graphql", "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
})();
