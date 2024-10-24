import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    genre: '',
    year: ''
  });
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rouded'>
        <h1>Add movie</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control'
              placeholder='Type the name of the movie'
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="genre">Genre:</label>
            <input type="text" name='genre' className='form-control'
              placeholder='Type the genre of the movie'
              onChange={e => setValues({ ...values, genre: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="year">Year:</label>
            <input type="text" name='year' className='form-control'
              placeholder='Type the release year of the movie'
              onChange={e => setValues({ ...values, year: e.target.value })}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Cancel</Link>
        </form>
      </div>
    </div>
  )
}
export default Create;