import React from "react";
import { useActions } from "src/store/actions";

const Home = () => {
  const { logOutUser } = useActions(); //example of using useActions
  return (
    <div>
      Welcome User
      <div>
        <button onClick={() => logOutUser()}>Log out</button>
      </div>
    </div>
  );
};

export default Home;
