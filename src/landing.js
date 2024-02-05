import React, {useState, useEffect} from 'react';
import './landing.css';

function Landing(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/topfive')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, []);

  return(
    <div class="landing-container">
        <div class="landing-child">
                <th>Top Five Rented Movies</th>
                {data.map((d, i ) => (
                    <tr key={i}>
                        <td>
                            <div class="landing-item">{d.title}</div>
                        </td>
                    </tr>
                ))}
        </div>
        {/* 
        <div class="landing-child">
                <th>Top Five Actors</th>
                {data.map((d, i ) => (
                    <tr key={i}>
                        <td>
                            <div class="landing-item">{d.title}</div>
                        </td>
                    </tr>
                ))}
        </div>
        */}
    </div>
    );
}

export default Landing;