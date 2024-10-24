import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  const [searchId, setSearchId] = useState('');
  
  const [showEditForm, setShowEditForm] = useState(false);
  
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
        setShowEditForm(true); 
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies/' + searchId, values)
      .then(res => {
        navigate('/');  
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        
        {!showEditForm ? (
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
          
            <h1>Updating Movie</h1>
            <form onSubmit={handleUpdate}>
              <div className='mb-2'>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name='name'
                  className='form-control'
                  placeholder='Type the new name of the movie'
                  value={values.name}
                  onChange={e => setValues({ ...values, name: e.target.value })}
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
                  onChange={e => setValues({ ...values, genre: e.target.value })}
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
                  onChange={e => setValues({ ...values, year: e.target.value })}
                />
              </div>
              <button className='btn btn-success'>Update</button>
              <Link to="/" className='btn btn-secondary ms-3'>Cancel</Link>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default Update;
