import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#08d215",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  // useEffect(() => {
  //   if (value === 0) {
  //     history.push("/");
  //   } else if (value === 1) {
  //     history.push("/trending");
  //   } else if (value === 2) {
  //     history.push("/movies");
  //   } else if (value === 3) {
  //     history.push("/series");
  //   } else if (value === 4) {
  //     history.push("/search");
  //   }
  // }, [value, history]);
  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction
        style={{ color: "white" }}
        label="Home"
        icon={<WhatshotIcon />}
        className="d-none"
      /> */}
      <BottomNavigationAction
      onClick={() => history.push("/trending")}
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
      onClick={() => history.push("/movies")}
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
      onClick={() => history.push("/series")}
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
      onClick={() => history.push("/search")}
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
    
  );
}
