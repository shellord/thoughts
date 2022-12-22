import { getAuth } from "firebase-admin/auth";
import { GraphQLError } from "graphql";

export type Context = {
  userId: string | null;
  name: string | null;
  email: string | null;
};

const InvalidUser: Context = {
  userId: null,
  name: null,
  email: null,
};

export const createContext = async ({ req }: any) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return InvalidUser;
  }

  try {
    console.log("token", token);
    const decodedToken = await getAuth().verifyIdToken(token);
    return {
      userId: decodedToken.uid,
      name: decodedToken.name,
      email: decodedToken.email,
    };
  } catch (e) {
    return InvalidUser;
  }
};
