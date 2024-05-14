import React from "react";
import { IUser } from "src/modules/users/interface";

import { useActions } from "src/store/actions";
import { IResponse } from "src/utils/common.type";

const Home = () => {
  const { setUser } = useActions(); //example of using useActions

  const callback = (res: IResponse<IUser>) => {
    if (res.status) {
      alert("Successfully created");
    } else {
      alert("Failed to create");
    }
  };
  const handleClick = () => {
    return setUser({
      data: { firstName: "", lastName: "" },
      cb: callback,
    });
  };

  return (
    <div>
      Welcome
      <div>
        <button onClick={handleClick}>Log in again again</button>
      </div>
    </div>
  );
};

export default Home;
