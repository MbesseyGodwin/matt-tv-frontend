import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import { Upload } from "./Pages/Uploads/Upload";
import { Container } from "@material-ui/core";
import Welcome from "./Pages/Home/Welcome";
import Comedy from "./Pages/youtube/Comedy";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/trending" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/upload" component={Upload} />
            <Route path="/comedy" component={Comedy} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
