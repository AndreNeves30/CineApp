import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function MovieDetails(){

        const {id} = useParams();
        const [movie, setMovie] = useState({})
        
        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.log(err))
            
        }, [])

        return(
            <>
            <h1>POi</h1>
            <p>{movie.title}</p>
            </>
        );
}

export default MovieDetails;