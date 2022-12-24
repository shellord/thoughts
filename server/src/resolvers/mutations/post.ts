import type { MutationResolvers } from "~/types/graphql";

export const postResolvers: MutationResolvers = {
  createPost: async (_, { content }, { firebaseId, prisma }) => {
    const post = await prisma.post.create({
      data: {
        authorId: firebaseId,
        content,
      },
      include: {
        author: true,
      },
    });

    return {
      id: post.id,
      content: post.content,
      author: {
        id: post.author.id,
        name: post.author.name,
        email: post.author.email,
      },
    };
  },
};
