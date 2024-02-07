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

      const filmClick = (filmTitle) => {
        console.log('Film:', filmTitle);
      };

      const actorClick = (actorFirst, actorLast) => {
        console.log('Actor:', actorFirst, actorLast);
      };

  return(
    <div class="container">
        <table>
            <th>Top Five Rented Films</th>
            {filmData.map((filmD, filmI ) => (
                <tr key={filmI}
                onClick={(e) => filmClick(filmD.title)}>
                    <td>
                        {filmD.title}
                    </td>
                </tr>
            ))}
        </table>

        <table>
            <th>Top Five Actors</th>
            {actorData.map((actorD, actorI ) => (
                <tr key={actorI}
                onClick={(e) => actorClick(actorD.first_name, actorD.last_name)}>
                    <td>
                        {actorD.first_name} {actorD.last_name}
                    </td>
                </tr>
            ))}
        </table>
    </div>
    );
}

export default Landing;