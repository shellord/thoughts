import { GraphQLError } from "graphql";
import type { QueryResolvers } from "~/types/graphql";

export const Query: QueryResolvers = {
  me: async (_, __, ctx) => {
    const { userId, name, email, prisma } = ctx;

    const user = await prisma.user.findUnique({
      where: {
        firebaseId: userId!,
      },
    });

    if (!user) {
      throw new GraphQLError("User is not registered", {
        extensions: {
          code: "UNREGISTERED",
          http: { status: 401 },
        },
      });
    }

    return {
      id: user?.id,
      name,
      email,
    };
  },
};
