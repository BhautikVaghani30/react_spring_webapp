import React from 'react';
import axios from 'axios';
import base_url from './api';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
function Card(props) {

    const deleteStud=(id)=>{
        axios.delete(`${base_url}/student/${id}`).then((res)=>{
            toast.success("Deleted Successfullt");
            props.delete(id);
        },(error)=>{
            console.log(error);
            toast.error("student not deleted server problem")
        })
    }





    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
           
           <img className="card-img-top mt-2" style={{ borderRadius: "5px" }} src="https://source.unsplash.com/random/?coder,student/" alt="Random image representing coders and students" height="200px" width="280px" />


            <div className="card-body">
                <h5 className="card-title"><span className='font-weight-bold'>Name :</span> {props.name}</h5>
                <p className="card-text"><span className='font-weight-bold'>collage :</span> {props.clg}</p>
                <p className="card-text"><span className='font-weight-bold'>City :</span> {props.city}</p>
                <p className="card-text"><span className='font-weight-bold'>Id :</span> {props.id}</p>
                <button color='danger' className='btn btn-danger btn-sm' onClick={()=>{
                    deleteStud(props.id);
                }}>Delete</button>
               
                <Link className='btn btn-warning btn-sm ml-3' to={`/addstud/${props.id}`}  >Update</Link>
            </div>
        </div>
    )
}

export default Card