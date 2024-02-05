import React, {useState} from 'react';
import './landing.css';

function Landing(){

    const [filmData, setFilmData] = useState([]);
    const [actorData, setActorData] = useState([]);

    const filmRequest = fetch('http://localhost:8000/top_films').then(response => response.json());
    const actorRequest = fetch('http://localhost:8000/top_actors').then(response => response.json());
    Promise.all([filmRequest, actorRequest])
      .then(([filmData, actorData]) => {
        setFilmData(filmData);
        setActorData(actorData);
      })
      .catch(error => {
        console.error(error);
      });
    

  return(
    <div class="landing-container">
        <div class="landing-child">
                <th>Top Five Rented Movies</th>
                {filmData.map((filmD, filmI ) => (
                    <tr key={filmI}>
                        <td>
                            <div class="landing-item">{filmD.title}</div>
                        </td>
                    </tr>
                ))}
        </div>

        <div class="landing-child">
                <th>Top Five Actors</th>
                {actorData.map((actorD, actorI ) => (
                    <tr key={actorI}>
                        <td>
                            <div class="landing-item">{actorD.first_name} {actorD.last_name}</div>
                        </td>
                    </tr>
                ))}
        </div>

    </div>
    );
}

export default Landing;