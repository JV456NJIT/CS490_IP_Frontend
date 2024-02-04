import React from 'react';
import './landing.css';

const Landing = () =>{
    return(
        <div class="grid-container">
            <div class="grid-child">
                <h1>Top 5 Rented Movies</h1>
            </div>

            <div class="grid-child">
                <h1>Movie Details</h1>
            </div>
            
            <div class="grid-child">
                <h1>List of Actors</h1>
            </div>

            <div class="grid-child">
                <h1>Actor Details</h1>
            </div>
        </div>
    );
};

export default Landing;