import type { QueryResolvers } from "~/types/graphql";

export const Query: QueryResolvers = {
  hello: () => {
    return "hello saheen";
  },
  me: (req, res, ctx) => {
    console.log(req);
    console.log(res);
    console.log(ctx);
    return {
      id: "1",
      name: "saheen",
      email: "sfsd@gd.com",
    };
  },
};
