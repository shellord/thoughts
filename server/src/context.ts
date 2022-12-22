import { getAuth } from "firebase-admin/auth";
import { GraphQLError } from "graphql";

export type Context = {
  userId: string | null;
  name: string | null;
  email: string | null;
};

export const createContext = async ({ req }: any) => {
  const authHeader = req.headers.authorization || "";

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }

  try {
    const decodedToken = await getAuth().verifyIdToken(token);
    console.log("deconde", decodedToken);
    return {
      userId: decodedToken.uid,
      name: decodedToken.name,
      email: decodedToken.email,
    };
  } catch (e) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
};
