import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [bookname, setBookname] = useState('');
    const [author, setAuther] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`http://localhost:4200/api/getbook/${id}`)
                .then((res) => {
                    setBookname(res.data.bookname);
                    setAuther(res.data.author);
                    setDescription(res.data.description);
                    setImage(res.data.image);
                    setPrice(res.data.price);
                })
                .catch((error) => {
                    alert('An error happened. Please Check console');
                    console.log(error);
                });
        }
        fetch();
    }, [id])

    const handleUpdate = async () => {
        const data = {
            bookname,
            author,
            description,
            image,
            price
        }
        await axios.put(`http://localhost:4200/api/updatebook/${id}`, data)
            .then(() => {
                alert('Data Updated Successfully');
                navigate(" / ");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center px-20 m-auto' style={{ minHeight: '91.5vh', backgroundColor: '#ffe5b4' }}>

                <div className='container p-4'>

                    <form action="">
                        <h5 className='text-center mb-3' style={{ fontSize: "26px" }}>Update Book</h5>
                        <div div className="mb-4 btn-md col-md-9 m-auto">
                            <label for="exampleFormControlInput1" className="form-label text-black">Book Name</label>

                            <input name="bookname" value={bookname} type="text" className="form-control text-black" id="exampleFormControlInput1" placeholder="Enter Book Name" onChange={(e) => setBookname(e.target.value)} />
                        </div>

                        <div className="mb-4 btn-md col-md-9 m-auto">
                            <label for="exampleFormControlInput1" className="form-label text-black">Author</label>

                            <input name="author" value={author} type="text" className="form-control text-black" id="exampleFormControlInput1" placeholder="Enter the name of Author " onChange={(e) => setAuther(e.target.value)} />
                        </div>

                        <div className="mb-4 btn-md col-md-9 m-auto">
                            <label for="exampleFormControlInput1" className="form-label text-black">Description</label>

                            <input name="description" value={description} type="text" className="form-control text-black" id="exampleFormControlInput1" placeholder="Enter the Discription of the book" onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="mb-4 btn-md col-md-9 m-auto">
                            <label for="exampleFormControlInput1" className="form-label text-black">Image</label>

                            <input name="image" value={image} type="text" className="form-control text-black" id="exampleFormControlInput1" placeholder="Enter the URL of the book" onChange={(e) => setImage(e.target.value)} />
                        </div>

                        <div className="mb-4 btn-md col-md-9 m-auto">
                            <label for="exampleFormControlInput1" className="form-label text-black">Price</label>

                            <input name="price" value={price} type="text" className="form-control text-black" id="exampleFormControlInput1" placeholder="Enter the price of the book" onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="mb-4 btn-md col-md-9 m-auto">
                            <button className="btn btn-success btn-sm col-sm-2" onClick={handleUpdate} > Update </button>
                        </div>
                    </form>

                </div>

            </div >
        </div>
    )
}

export default Edit