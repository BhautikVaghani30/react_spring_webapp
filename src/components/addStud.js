import React, { useState } from "react";
import axios from 'axios';
import base_url from "./api";
import { toast } from "react-toastify";
function AddStud() {
  const [stud, setstud] = useState({});
  const handleForm = (e) => {
    console.log(stud);
    postdatatoserver(stud);
    e.preventDefault();
  };

  const postdatatoserver=(data)=>{
    axios.post(
        `${base_url}/student/`,data
    ).then((response)=>{
        console.log(response);
        console.log("success");
        toast.success("Student Ragister");
    },(error)=>{
        console.log(error);
        console.log("error");
        
    })
  }

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mt-4" >Ragister Student</h1>
        <form onSubmit={handleForm}>
        <div className="form-group ">
            <label>Student _Id</label>
            <input
              type="text"
              className="form-control"
              id="_id"
              aria-describedby="emailHelp"
              placeholder="_id"
              onChange={(e)=>{
                setstud({...stud,id:e.target.value});
            }}
            />
          </div>
          <div className="form-group ">
            <label>Student Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
  );
}

export default AddStud;
