import { GraphQLError } from "graphql";
import type { MutationResolvers } from "~/types/graphql";

export const userResolvers: MutationResolvers = {
  register: async (_, input, ctx) => {
    const { userId, name, email, prisma } = ctx;

    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        firebaseId: userId,
      },
    });

    return {
      id: user?.id,
      name,
      email,
    };
  },
};
