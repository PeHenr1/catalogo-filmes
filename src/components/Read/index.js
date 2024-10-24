import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const {id} = useParams();

  const [values, setValues] = useState({
    name: '',
    genre: '',
    year: ''
  });

  useEffect(() => {
    axios.get('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies/' + id)
      .then(res => {
        console.log(res);
        setValues(res.data); 
      })
      .catch(err => {
        console.log(err);
      })
    });

  return (
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>Movie Details</h1>
            <form>
              <div className='mb-2'>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name='name'
                  className='form-control'
                  value={values.name}
                  readOnly 
                />
              </div>
              <div className='mb-2'>
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  name='genre'
                  className='form-control'
                  placeholder='Type the new genre of the movie'
                  value={values.genre}
                  readOnly
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="year">Year:</label>
                <input
                  type="text"
                  name='year'
                  className='form-control'
                  placeholder='Type the new release date of the movie'
                  value={values.year}
                  readOnly
                />
              </div>
              <Link to="/" className='btn btn-secondary ms-3'>Back</Link>
            </form>
        </div>
      
    )
}
export default Read;