import { userEntity2Dto } from "../../users/types";
import { UserEntity } from "../../users/user-model";
import { generateToken } from "./generate-token";

export const formatAuthResponse = (user: UserEntity) => {
  const token = generateToken({ id: user._id });
  return {
    token,
    user: userEntity2Dto(user),
  };
};

module.exports = formatAuthResponse;
