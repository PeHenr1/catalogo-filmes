import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Delete() {
  const [searchId, setSearchId] = useState('');
  const [data, setData] = useState([]);
  
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  
  const [values, setValues] = useState({
    name: '',
    genre: '',
    year: ''
  });

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies/' + searchId)
      .then(res => {
        setValues(res.data);  
        setShowDeleteForm(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies/' + searchId)
      .then(() => {
        setData( prevData => prevData.filter(movie => movie.id !== searchId) );
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        
        {!showDeleteForm ? (
          <>
            <h1>Find Movie</h1>
            <form onSubmit={handleSearch}>
              <div className='mb-2'>
                <label htmlFor="searchId">Movie ID:</label>
                <input
                  type="text"
                  name='searchId'
                  className='form-control'
                  placeholder='Type the movie ID'
                  value={searchId}
                  onChange={e => setSearchId(e.target.value)}
                />
              </div>
              <button type="submit" className='btn btn-primary'>Search</button>
              <Link to="/" className='btn btn-secondary ms-3'>Cancel</Link>
            </form>
          </>
        ) : (
          <><h1>Find Movie</h1>
          <form onSubmit={handleSearch}>
            <div className='mb-2'>
              <label htmlFor="searchId">Movie ID:</label>
              <input
                type="text"
                name='searchId'
                className='form-control'
                placeholder='Type the movie ID'
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
              />
            </div>
            <button type="submit" className='btn btn-primary'>Search</button>
            <Link to="/" className='btn btn-secondary ms-3'>Cancel</Link>
          </form>
          
            <h1>Delete Movie</h1>
            <form onSubmit={handleDelete}>
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
              <button className='btn btn-danger'>Delete</button>
              <Link to="/" className='btn btn-secondary ms-3'>Cancel</Link>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default Delete;
