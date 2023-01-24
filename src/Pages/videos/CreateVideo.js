import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateVideo() {
  const [form, setForm] = useState({
    videoId: "",
    videoName: "",
    owner: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newVideo = { ...form };

    await fetch("http://localhost:5000/video/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ videoId: "", videoName: "", owner: "" });
    navigate("/videos");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="container mt-5 py-3">
      <h6>Create video</h6>
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
            <label htmlFor="videoName">Video Name: </label>
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
              value="Create video"
              className="btn btn-primary"
            />
            <button onClick={() => {window.history.back()}} className="btn btn-info">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
