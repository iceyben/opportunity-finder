import jwt from "jsonwebtoken";
import { env } from "../../config/env";

export const generateToken = (payload: object) => {
  return jwt.sign(payload, env.JWT_SECRET as string, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};
