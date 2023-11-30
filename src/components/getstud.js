import React, { useEffect, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import Card from './card'
import base_url from './api';

// `${base_url}/student/`
function Getstud() {

   

        const [stud,setStud] = useState([]);

        async function fetchData() {
            const apiUrl = `${base_url}/student/`;
          
            try {
              const response = await fetch(apiUrl);
          
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
          
              const data = await response.json();
              setStud(data);
              console.log('Data:', data);
              
              // Do something with the fetched data
            } catch (error) {
              console.error('Error:', error);
            }
          }
  
    useEffect(()=>{
        fetchData();
        
    },[])
  

    const removeStudById=(id)=>{
      setStud(stud.filter((c)=>c.id!=id));
    }
    
    return (
        <div className='container' >
            <div className="jumbotron">
                <h1 className="display-4">View All Students </h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
                </div>
                <div className='' style={{ display: 'flex', flexWrap: 'wrap' , margin: '20px'}}>
                <div className="row row-cols-1 row-cols-md-4">

            
                    
            {

                stud.length > 0 
                ? stud.map((i)=> <Card key={i.id} name={i.name} clg={i.college} id={i.id} city={i.city} delete={removeStudById}/>)
                : "no students"
            }
            </div>
            </div>
            {/* <Card name={stud.name} clg={stud.fetchData} id={stud.id}/> */}
            
            










        </div>
    )
}

export default Getstud