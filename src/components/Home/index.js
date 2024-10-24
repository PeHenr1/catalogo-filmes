import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://671990d57fc4c5ff8f4dc0cb.mockapi.io/movies')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
<div className='d-flex flex-column justify-content-center align-items-center vh-100'>
  <h1>Movies</h1>
  <div className='w-75' style={{ height: '60vh' }}>
    <div className='d-flex flex-column'>
      {
        data.map((d, i) => (
          <Link to={`/read/${d.id}`} key={i}>
            <div className='d-flex flex-column mb-3 p-3 border rounded'>
              <p>ID: {d.id}</p>
              <p>Nome: {d.name}</p>
            </div>
          </Link>
        ))
      }
    </div>
  </div>
</div>
  );
}
export default Home;