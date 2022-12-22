import type { QueryResolvers } from "~/types/graphql";

export const Query: QueryResolvers = {
  me: (_, __, ctx) => {
    const { userId, name, email } = ctx;
    return {
      id: userId,
      name,
      email,
    };
  },
};
