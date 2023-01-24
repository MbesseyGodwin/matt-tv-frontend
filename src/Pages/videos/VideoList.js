import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Video = (props) => (
  <tr>
    <td className="d-flex justify-content-around">
      <Link
        className="text-light text-decoration-none"
        title="edit"
        to={`/videos/edit/${props.video._id}`}
      >
        {props.video.videoName}
      </Link>
      <button
        className="btn btn-sm btn-danger"
        title="delete"
        onClick={() => {
          props.deleteVideo(props.video._id);
        }}
      >
        <DeleteIcon fontSize="sm" />
      </button>
    </td>
  </tr>
);

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  // This method fetches the videos from the database.
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(`https://matt-tv-backend.onrender.com/video`);

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

  // This method will delete a video
  async function deleteVideo(id) {
    await fetch(`https://matt-tv-backend.onrender.com/video/${id}`, {
      method: "DELETE",
    });

    const newVideos = videos.filter((el) => el._id !== id);
    setVideos(newVideos);
  }

  // This method will map out the videos on the table
  function videoList() {
    return videos.map((video) => {
      return (
        <Video
          video={video}
          deleteVideo={() => deleteVideo(video._id)}
          key={video._id}
        />
      );
    });
  }

  // This following section will display the table with the videos of individuals.
  return (
    <div className="container-fluid">
      <div className="my-2">
        <div className="d-flex justify-content-between py-2">
        <h6>video List</h6>
        <Link className="btn btn-sm btn-success" to={"../videos/create"}>
          Add Video
        </Link>
        </div>
        <input
          className="form-control"
          type="search"
          name="searchTable"
          id="searchTable"
          placeholder="search videos"
        />
        <table
          className="table table-striped table-hover table-dark table-bordered table-sm"
          style={{ marginTop: 20 }}
        >
          <thead className="text-center">
            <tr>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>{videoList()}</tbody>
        </table>
      </div>
    </div>
  );
}