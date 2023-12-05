import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Booksection = ({ data }) => {

    const navigate = useNavigate();
    const [items, setItems] = useState([])

    const handleDelete = async (item) => {
        setItems(items.filter((p) => p._id !== item._id));
        await axios.delete(`http://localhost:4200/api/delete/${item._id}`);
        alert('Item deleted successfully');
    }

    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>

            {data && data.map((item, index) => (
                <div key={item.id} style={{ border: "2px solid gray", height: "380px", width: "250px", backgroundColor: "#f5f5f5", borderRadius: "10px", boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1) ", margin: "0px 9px 30px 9px" }}>
                    <div className='text-white' >
                        <img style={{ height: "190px", width: "246px", borderRadius: "inherit", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} src={item.image} alt="/" />
                    </div>
                    <h6 className='text-black mx-2 my-2 ' style={{ fontWeight: "500" }}>{item.bookname.slice(0, 45)}...
                    </h6>
                    <span className='text-black mx-2 d-block' > <b style={{ fontWeight: "500" }}>Author Name:</b> {item.author}
                    </span>

                    <br />

                    <span className='text-black mx-2' style={{ position: "relative", top: "-25px" }}> <b style={{ fontWeight: "500" }}>Price: &#8377;</b>{item.price}</span>

                    <div className=' d-flex justify-content-around align-items-center style'>

                        <button className='btn btn-primary mx-2 ' style={{ position: "relative", top: "-15px" }}
                            onClick={() => navigate(`/edit/${item._id}`)}> Update</button>

                        <button className='btn btn-danger mx-2 ' style={{ position: "relative", top: "-15px" }} onClick={() => handleDelete(item)}>Delete</button>
                        
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Booksection

