import React from "react";

import { useActions } from "src/redux-toolkit/actions";

const Home = () => {
  const { setUser } = useActions(); //example of using useActions

  return (
    <div>
      Welcome User
      <div>
        <button onClick={() => setUser({ firstName: "", lastName: "" })}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Home;
