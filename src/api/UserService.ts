import { IUser } from "src/modules/users/interface";
import { Api } from "./Api";

export class UserService extends Api<IUser> {
  constructor() {
    super("auth");
  }

  getCurrentUser = async () => {
    return this.get("current-user");
  };
}
