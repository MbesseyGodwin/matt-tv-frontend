import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Users from "./Pages/Users/Users";
import VideoList from "./Pages/videos/VideoList";
import CreateVideo from "./Pages/videos/CreateVideo";
import EditVideo from "./Pages/videos/EditVideo";
import AdminProfile from "./Pages/Accounts/AdminProfile";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Welcome />} exact />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/users" element={<Users />} />
            <Route path="/videos" element={<VideoList />} />
            <Route path="/videos/create" element={<CreateVideo />} />
            <Route path="/videos/edit" element={<EditVideo />} />
            <Route path="/accounts" element={<AdminProfile />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
