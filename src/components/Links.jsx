import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/coins">Coins</Link>
    </div>
  );
};

export default Links;