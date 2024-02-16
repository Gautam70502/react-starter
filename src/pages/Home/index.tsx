import React from "react";

import { useActions } from "src/store/actions";

const Home = () => {
  const { setUser } = useActions(); //example of using useActions

  return (
    <div>
      Welcome
      <div>
        <button onClick={() => setUser({ firstName: "", lastName: "" })}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Home;
