import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player/youtube";
import MovieIcon from "@material-ui/icons/Movie";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import "./Comedy.css";

/* <ReactPlayer url="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios" />; */

// const Video = (props) => <div>{props.video.videoName}</div>;

export default function Comedy() {
  const [videos, setVideos] = useState([]);

  // This method fetches the videos from the database.
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(
        `https://matt-tv-backend.onrender.com/video`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const videos = await response.json();
      setVideos(videos);
    }

    getVideos();
    return;
  }, [videos.length]);

  // This method will map out the videos on the table
  function videoList() {
    return videos.map((video) => {
      return (
        <div className="col-lg-4 col-sm-12">
          {/* <Video video={video} key={video._id} /> */}
          <iframe
          className="p-2"
            key={video._id}
            width=""
            height="315"
            src={`https://www.youtube.com/embed/${video.videoName}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="container d-flex justify-content-evenly" style={{}}>
            <a href="#" className="btn btn-sm btn-primary mx-1"><SubscriptionsIcon fontSize="small" /> subscribe</a>
            <a href="#" className="btn btn-sm btn-warning mx-1"><ThumbUpIcon fontSize="small" /> like</a>
            <a href="#" className="btn btn-sm btn-success mx-1"><ShareIcon fontSize="small" /> share</a>
          </div>
          <hr  class="style-hr"/>
        </div>
      );
    });
  }

  // This following section will display the table with the videos of individuals.
  return (
    <div className="container-fluid text-center bg-light">
      <p className="text-dark h6">MATT-TV COMEDY</p>
      <hr class="style-hr"/>
      <div class="row">
        {videoList()}
      </div>
    </div>
  );
}
