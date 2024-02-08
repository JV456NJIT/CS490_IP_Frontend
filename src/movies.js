import React, {useState, useEffect} from 'react';
import './movies.css';

function Movies(){

    const initialValues = {movieTitle: null, actorFirstName: null, actorLastName: null, movieGenre: null}
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [values, setValues] = useState(initialValues);
    const [filmPicked, setFilmPicked] = useState(false);
    const [filmDetail, setFilmDetail] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };

    useEffect(() =>{
        if(values.movieTitle=="") values.movieTitle=null;
        if(values.actorFirstName=="") values.actorFirstName=null;
        if(values.actorLastName=="") values.actorLastName=null;
        if(values.movieGenre=="") values.movieGenre=null;
        searchInput(values.movieTitle, values.actorFirstName, values.actorLastName, values.movieGenre);
    },[values]);
    
    const searchInput = (title, actorFirst, actorLast, genre) =>{
        setLoaded(false);
        fetch(`http://localhost:8000/films/${title}&${actorFirst}&${actorLast}&${genre}`)
        .then(response => response.json())
        .then((movies) => {
            setMovies(movies);
            setLoaded(true);
        })
    };

    const filmClick = (filmTitle) => {
        setLoaded(false);
        fetch(`http://localhost:8000/film/${filmTitle}`)
        .then(response => response.json())
        .then((filmDetail) => {
            setFilmDetail(filmDetail);
            setLoaded(true);
            setFilmPicked(true);
        })
    };

    const clickClose = () =>{
        setFilmPicked(false);
    }

    return(
        <>
            <div class="search-container">
                <input type="text" placeholder="Movie Name" class="search-bar" value={values.movieTitle} name="movieTitle"
                    onChange={handleChange}></input>

                <input type="text" placeholder="Actor First Name" class="search-bar" value={values.actorFirstName} name="actorFirstName"
                    onChange={handleChange}></input>

                <input type="text" placeholder="Actor Last Name" class="search-bar" value={values.actorLastName} name="actorLastName"
                    onChange={handleChange}></input>

                <input type="text" placeholder="Movie Genre" class="search-bar" value={values.movieGenre} name="movieGenre"
                    onChange={handleChange}></input>
            </div>

            {loaded && (
                <div class="container" onClick={clickClose}>
                    <table>
                        <th>Film Name</th>
                        {movies.map((filmD, filmI ) => (
                            <tr key={filmI}
                            onClick={(e) => filmClick(filmD.title)}>
                                <td>{filmD.title}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}

            {(loaded && filmPicked) && (
                <div class="popup-container" onClick={clickClose}>
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
        </>
    );
}
export default Movies;