import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Booksection from './Booksection';

const Books = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:4200/api/getbook`)
        .then((res) => setData(res.data));
    };
    fetch();
  })

  return (
    <div style={{ minHeight: '91.5vh', backgroundColor: "#e6f7ff" }}>
      <div className='justify-content-center align-items-center py-3 d-flex'>
        <h4 style={{ color: "black" }}>Books Section</h4>
      </div>

      {Data ? (<Booksection data={Data} />) : (<div className='text-white'>Loading...</div>)}
    </div>
  )
}

export default Books