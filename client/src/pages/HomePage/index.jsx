import React, { useContext } from "react";
import { AppContext } from "../../component/context/Global";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <h1>Ini Homepage</h1>
      <Link to="/" className="linkSide" onClick={handleLogOut}>
        <p className="">Logout</p>
      </Link>
    </div>
  );
};

export default HomePage;
