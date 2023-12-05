import React from 'react'
import './Home.css'
import image from '../images/29660.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='element col-lg-6 col-md-12 mb-0 mt-0 py-0 d-flex justify-content-center align-items-start flex-column' style={{ height: '91.5vh' }}>
            <h2 style={{ fontSize: '60px' }}>BOOK STORE WEB APP</h2>
            <Link className='view' to="/books" >View Books</Link>
          </div>

          <div className='element col-lg-6 col-md-12 mt-0 py-0 d-flex justify-content-center align-items-center flex-column' style={{ height: '91.5vh' }}>
            <img src={image} className='image' alt="not found" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home