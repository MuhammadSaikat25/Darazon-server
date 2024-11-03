import bcrypt from "bcryptjs";
import { UserModel } from "./user.model";
import AppError from "../../error/AppError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

const createUser = async (playLoad: any) => {
  const result = await UserModel.create(playLoad);
  return result;
};

const loginUser = async (playLoad: any) => {
  const user = await UserModel.findOne({ email: playLoad.email });
  if (!user) {
    throw Error("User not found");
  }

  const checkingPassword = await bcrypt.compare(
    playLoad.password as string,
    user?.password as string
  );

  if (checkingPassword == false) {
    throw new AppError(httpStatus.BAD_REQUEST, "Password does not match");
  }
  const jwtPlayLoad = {
    email: user?.email,
    role: user?.role,
    _id: user._id,
  };
  const jwtToken = jwt.sign(jwtPlayLoad, process.env.JWT as string, {
    expiresIn: "10d",
  });
  return {
    user: {
      role: user?.role,
      email: user?.email,
    },
    jwtToken,
  };
};
export const userService = {
  createUser,
  loginUser,
};
