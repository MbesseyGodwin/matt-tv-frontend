import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./Comedy.css";

{
  /* <ReactPlayer url="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios" />; */
}

const Video = (props) => <div>{props.video.videoName}</div>;

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
          <Video video={video} key={video._id} />
          <iframe
            width=""
            height="315"
            src={`https://www.youtube.com/embed/${video.videoName}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      );
    });
  }

  // This following section will display the table with the videos of individuals.
  return (
    <div className="container-fluid text-center">
      <h3 className="h3">MATT-TV COMEDY</h3>
      <hr />
      <div class="row">
        {videoList()}
        <hr />
      </div>
    </div>
  );
}
