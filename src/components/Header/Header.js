import "./Header.css";
// import icons
import Home from "@material-ui/icons/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    backgroundColor: "#08d215",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 100,
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <header className="container-fluid header">
      <div className="d-flex justify-content-around">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            onClick={() => navigate("/")}
            style={{ color: "white" }}
            label="Home"
            icon={<Home />}
          />

          <BottomNavigationAction
            onClick={() => navigate("/comedy")}
            style={{ color: "white" }}
            label="Comedy"
            icon={<PlayCircleIcon />}
          />

          <BottomNavigationAction
            onClick={() => navigate("/accounts")}
            style={{ color: "white" }}
            label="Account"
            icon={<AccountBoxIcon />}
          />
        </BottomNavigation>
      </div>
    </header>
  );
};

export default Header;
