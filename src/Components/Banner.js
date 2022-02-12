import React, { useState } from "react";
import "../CssFiles/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      {/* if showSearch is true only then show Search component */}
      {showSearch && <Search />}
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? "Hide Search" : "Show Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plana a diffrenet kind of gateway to uncover hidden gems near you
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
