import { PrismaClient } from "@prisma/client";
import { getAuth } from "firebase-admin/auth";

type User = {
  userId: string;
  name: string;
  email: string;
};

export type Context = User & {
  prisma: PrismaClient;
};

const prisma = new PrismaClient();

const InvalidUser: {
  [key in keyof User]: null;
} = {
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
    const decodedToken = await getAuth().verifyIdToken(token);
    return {
      userId: decodedToken.uid,
      name: decodedToken.name,
      email: decodedToken.email,
      prisma,
    };
  } catch (e) {
    return InvalidUser;
  }
};
