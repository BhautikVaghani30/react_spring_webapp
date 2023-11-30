import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import base_url from './api';
import { toast } from 'react-toastify';

function Update() {
    const { id } = useParams();
    const [stud, setstud] = useState({
      id: id,
      name: '',
      city: '',
      college: '',
    });
    
    useEffect(() => {
      axios.get(`${base_url}/student/${id}`).then(
        (res) => {
          setstud({
            ...stud,
            name: res.data.name,
            city: res.data.city,
            college: res.data.college,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }, [id]);
    const handleForm = (e) => {
        console.log(stud);
        postdatatoserver(stud);
        e.preventDefault();
      };
    
      const postdatatoserver=(data)=>{
        axios.put(
        `${base_url}/student/${id}`,data
        ).then((response)=>{
            console.log(response);
            console.log("success");
            toast.success("Student updated");
        },(error)=>{
            console.log(error);
            console.log("error");
            toast.error("something went wrong server Error Try again after some time...")
            
        })
      }

    return (
        <>
        <div className="container my-4">
          <h1 className="text-center" >Student</h1>
          <form onSubmit={handleForm}>
          {/* <div className="form-group ">
              <label>Student _Id</label>
              <input
                type="text"
                className="form-control"
                id="_id"
                aria-describedby="emailHelp"
                placeholder="_id"
                value={stud.id}
                onChange={(e)=>{
                  setstud({...stud,id:e.target.value});
              }}
              />
            </div> */}
            <div className="form-group ">
              <label>Student Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={stud.name}
                onChange={(e)=>{
                  setstud({...stud,name:e.target.value});
              }}
              />
            </div>
            <div className="form-group">
              <label>Student City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                value={stud.city}
                onChange={(e)=>{
                  setstud({...stud,city:e.target.value});
              }}
                
              />
            </div>
            <div className="form-group">
              <label>Student collage</label>
              <input
                type="text"
                className="form-control"
                id="collage"
                placeholder="Password"
                value={stud.college}
                onChange={(e)=>{
                  setstud({...stud,college:e.target.value});
              }}
              />
            </div>
  
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
           
            <button type="reset" className=" btn btn-warning ml-2">Clear</button>
          </form>
        </div>
      </>
    )
}

export default Update