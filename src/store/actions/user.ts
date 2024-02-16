import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "src/api/UserService";
import { IUser } from "src/modules/users/interface";

const userService = new UserService();

export const setUser = createAsyncThunk(
  "user/setUser",
  async (payload: IUser) => {
    return await userService.post(payload);
  },
);
