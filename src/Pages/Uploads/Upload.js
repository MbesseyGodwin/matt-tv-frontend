import React from 'react'

export const Upload = () => {
  return (
    <div className='container bg-light text-dark'>
      <h4 className='text-center text-uppercase'>Add a new video</h4><hr />
      <form action="">
        <div class="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <label className='text-success h6' htmlFor="videoName">video name</label>
            <input type="text" required name="videoName" id="videoName" className='form-control mb-3'/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <label className='text-success h6' htmlFor="videoId">video id</label>
            <input type="text" required name="videoId" id="videoId" className='form-control mb-3'/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <label className='text-success h6' htmlFor="owner">owner</label>
            <input type="text" required name="owner" id="owner" value="matthew" readOnly className='form-control mb-3'/>
          </div>
        </div>
        <button type="submit" class="btn btn-primary form-control my-2">Click to Upload</button>
      </form>
    </div>
  )
}
