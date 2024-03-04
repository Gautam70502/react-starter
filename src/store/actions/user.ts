import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "src/api/UserService";
import { IUser } from "src/modules/users/interface";
import { IResponse } from "src/utils/common.type";

const userService = new UserService();

interface IPayload {
  data: IUser;
  cb?: (response: IResponse<IUser>) => void;
}

export const setUser = createAsyncThunk(
  "user/setUser",
  async (payload: IPayload) => {
    const { data, cb } = payload;

    try {
      const response = await userService.post(data);

      if (cb) {
        cb(response);
      }
      return response.data;
    } catch (err: unknown) {
      const { error } = err as IResponse<IUser>;
      if (cb) {
        cb(err as IResponse<IUser>);
      }
      throw error;
    }
  },
);
