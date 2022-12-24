import type { MutationResolvers } from "~/types/graphql";

export const userResolvers: MutationResolvers = {
  register: async (_, input, { firebaseId, prisma }) => {
    const user = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        firebaseId,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },
};
