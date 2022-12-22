import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "./src/types/graphql.ts": {
      config: {
        useIndexSignature: true,
        contextType: "./src/context#Context",
      },

      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
