import React from 'react'

export const Upload = () => {
  return (
    <div className='container bg-light'>
      <form action="">
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="" className='form-control'/>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
