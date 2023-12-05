import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Addbooks = () => {

  const [post, setPost] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  }
  console.log(post);
  const handleSubmit = async () => {

    await axios.post(`http://localhost:4200/api/add`, post)
      .then(() => alert("Data added successfully"));
    setPost({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    })
  }

  return (

    <div className='d-flex justify-content-center align-items-center px-20 m-auto' style={{ minHeight: '91.5vh', backgroundColor: '#ffe5b4' }}>

      <div className='container p-4'>

        <form action="">
          <h5 className='text-center mb-3' style={{ fontSize: "26px" }}>Add Book</h5>
          <div div className="mb-4 btn-md col-md-9 m-auto">
            <label for="exampleFormControlInput1" className="form-label text-black">Book Name</label>
            <input name="bookname" value={post.bookname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" onChange={handleChange} />
          </div>

          <div className="mb-4 btn-md col-md-9 m-auto">
            <label for="exampleFormControlInput1" className="form-label text-black">Author</label>
            <input name="author" value={post.author} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the name of Author " onChange={handleChange} />
          </div>

          <div className="mb-4 btn-md col-md-9 m-auto">
            <label for="exampleFormControlInput1" className="form-label text-black">Description</label>
            <input name="description" value={post.description} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Discription of the book" onChange={handleChange} />
          </div>

          <div className="mb-4 btn-md col-md-9 m-auto">
            <label for="exampleFormControlInput1" className="form-label text-black">Image</label>
            <input name="image" value={post.image} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the book" onChange={handleChange} />
          </div>

          <div className="mb-4 btn-md col-md-9 m-auto">
            <label for="exampleFormControlInput1" className="form-label text-black">Price</label>
            <input name="price" value={post.price} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the price of the book" onChange={handleChange} />
          </div>

          <div className="mb-4 btn-md col-md-9 m-auto">
            <button className="btn btn-success btn-sm col-sm-2" onClick={handleSubmit}> Post </button>
          </div>
        </form>

      </div>

    </div >

  )
}

export default Addbooks