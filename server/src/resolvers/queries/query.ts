import { GraphQLError } from "graphql";
import type { QueryResolvers } from "~/types/graphql";

export const Query: QueryResolvers = {
  me: async (_, __, ctx) => {
    const { prisma, firebaseId } = ctx;

    const user = await prisma.user.findUnique({
      where: {
        firebaseId,
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
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },

  posts: async (_, __, { firebaseId, prisma }) => {
    const posts = await prisma.post.findMany({
      where: {
        authorId: firebaseId,
      },
      include: {
        author: true,
      },
    });

    return posts.map((post) => ({
      id: post.id,
      content: post.content,
      author: {
        id: post.author.id,
        name: post.author.name,
        email: post.author.email,
      },
    }));
  },
};
