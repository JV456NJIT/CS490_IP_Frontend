import React from 'react';
import './movies.css';

const movies = () =>{
    return(
        <>
            <div class="search-movies">
                    <input type="text" class="search" placeholder="Search for Movies..."></input>
            </div>

            <div class="movies-container">
                <div class="grid-child">
                    <h1>List of Movies</h1>
                </div>

                <div class="movies-child">
                    <h1>Movie Details View</h1>
                </div>
            </div>
        </>
    );
};

export default movies;