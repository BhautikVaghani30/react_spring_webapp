// src/components/Home.js
import '../index.css';
import React from 'react';

const Home = () => {
  return  ( 
    <>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class=" w-100" src="https://source.unsplash.com/random/?coder,student/" height="691px" width="1200px" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class=" w-100" src="https://source.unsplash.com/random/?data analyst/"  height="691px" width="1200px" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class=" w-100" src="https://source.unsplash.com/random/?google,microsoft/"  height="691px" width="1200px" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>
  );
};

export default Home;
