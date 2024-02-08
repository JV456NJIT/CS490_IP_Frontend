import React, {useState} from 'react';
import './landing.css';

function Landing(){

    const [filmData, setFilmData] = useState([]);
    const [actorData, setActorData] = useState([]);
    const [filmDetail, setFilmDetail] = useState([]);
    const [actorDetail, setActorDetail] = useState([]);
    const [loaded, setLoading] = useState(false);
    const [filmPicked, setFilmPicked] = useState(false);
    const [actorPicked, setActorPicked] = useState(false);

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
        setLoading(false);
        fetch(`http://localhost:8000/film/${filmTitle}`)
        .then(response => response.json())
        .then((filmDetail) => {
            setFilmDetail(filmDetail);
            setLoading(true);
            setFilmPicked(true);
        })
    };

    const actorClick = (actorID) => {
        setLoading(false);
        fetch(`http://localhost:8000/actor/${actorID}`)
        .then(response => response.json())
        .then((actorDetail) => {
            setActorDetail(actorDetail);
            setLoading(true);
            setActorPicked(true);
        })
        console.log(actorDetail);
    };

    const clickClose = () =>{
        setLoading(false);
        setActorPicked(false);
        setFilmPicked(false);
    }

    return(
        <div class="container" onClick={clickClose}>
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

            {(loaded && filmPicked) && (
                <div class="popup-container">
                    <div class="popup">
                        <table>
                        <th colSpan="100%">Film Details</th>
                            {filmDetail.map((filmD, filmI ) => (
                                <tbody>
                                    <tr>
                                        <td>Film Name:</td>
                                        <td>{filmD.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Film Release Year:</td>
                                        <td>{filmD.release_year}</td>
                                    </tr>
                                    <tr>
                                        <td>Film Length:</td>
                                        <td>{filmD.length}m</td>
                                    </tr>
                                    <tr>
                                        <td>Film Rental Rate:</td>
                                        <td>{filmD.rental_rate}</td>
                                    </tr>
                                    <tr>
                                        <td>Film Rating:</td>
                                        <td>{filmD.rating}</td>
                                    </tr>
                                    <tr>
                                        <td>Film Description:</td>
                                        <td>{filmD.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Film Genre:</td>
                                        <td>{filmD.name}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            )}

            <table>
                <th>Top Five Actors</th>
                {actorData.map((actorD, actorI ) => (
                    <tr key={actorI}
                    onClick={(e) => actorClick(actorD.actor_id)}>
                        <td>
                            {actorD.first_name} {actorD.last_name}
                        </td>
                    </tr>
                ))}
            </table>

            {(loaded && actorPicked) && (
                <div class="popup-container">
                    <div class="popup">
                        <table>
                        <th colSpan="100%">Actor's Top Films</th>
                            {actorDetail.map((actorD, actorI ) => (
                                <tr key={actorI}>
                                    <td>
                                        {actorD.title}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Landing;