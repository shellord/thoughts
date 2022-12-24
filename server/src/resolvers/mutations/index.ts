import { userResolvers } from "./user";
import { postResolvers } from "./post";

export const Mutation = {
  ...userResolvers,
  ...postResolvers,
};
