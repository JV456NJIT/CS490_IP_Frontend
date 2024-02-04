import React from 'react';
import './customers.css';

const customers = () =>{
    return(
        <>
            <div class="search-customers">
                <input type="text" class="search" placeholder="Search for Customers..."></input>
            </div>

            <div class="customers-container">
                <div class="grid-child">
                    <h1>Customer Search Results</h1>
                </div>
                
                <div class="customers-child">
                    <h1>Customer Details</h1>
                </div>
            </div>
        </>
    );
};

export default customers;