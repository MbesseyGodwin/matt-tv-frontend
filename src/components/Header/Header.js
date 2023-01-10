import "./Header.css";
import Home from "@material-ui/icons/Home";
import Cached from "@material-ui/icons/Cached";
import Input from "@material-ui/icons/Input";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    backgroundColor: "#08d215",
    zIndex: 100,
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  
  return (
    <header className="container-fluid header">
      <div className="d-flex justify-content-around">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          // showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            onClick={() => history.push("/")}
            style={{ color: "white" }}
            label="Home"
            icon={<Home />}
          />

          <BottomNavigationAction
            onClick={() => window.scroll(0, 0)}
            style={{ color: "white" }}
            label="Top"
            icon={<Cached />}
          />
          <BottomNavigationAction
            onClick={() => history.push("/login")}
            style={{ color: "white" }}
            label="Login"
            icon={<Input />}
          />
        </BottomNavigation>
      </div>
    </header>
  );
};

export default Header;
