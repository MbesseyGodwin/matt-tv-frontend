import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditVideo() {
  const [form, setForm] = useState({
    videoId: "",
    videoName: "",
    owner: "",
    videos: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `https://matt-tv-backend.onrender.com/video/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const video = await response.json();
      if (!video) {
        window.alert(`video with id ${id} not found`);
        navigate("/videos");
        return;
      }

      setForm(video);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedOneVideo = {
      videoId: form.videoId,
      videoName: form.videoName,
      owner: form.owner,
    };

    // This will send a post request to update the data in the database.
    await fetch(`https://matt-tv-backend.onrender.com/video/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedOneVideo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/videos");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="container mt-5 py-3">
      <h6>Update video</h6>
      <div className="border p-3">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="videoId">videoId: </label>
            <input
              type="text"
              className="form-control"
              required
              id="videoId"
              value={form.videoId}
              onChange={(e) => updateForm({ videoId: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="videoName">videoName: </label>
            <input
              type="text"
              className="form-control"
              required
              id="videoName"
              value={form.videoName}
              onChange={(e) => updateForm({ videoName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="owner">owner: </label>
            <input
              type="text"
              className="form-control"
              required
              id="owner"
              value={form.owner}
              onChange={(e) => updateForm({ owner: e.target.value })}
            />
          </div>
          <br />

          <div className="form-group d-flex justify-content-between">
            <input
              type="submit"
              value="Update video"
              className="btn btn-primary"
            />
            <button
              onClick={() => {
                window.history.back();
              }}
              className="btn btn-info"
            >
              Return
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
