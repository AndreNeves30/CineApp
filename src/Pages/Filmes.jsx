import {useEffect, useState} from 'react'
import MovieCard from '../Componentes/MovieCard/MovieCard';

function Filmes() {


    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=en-US&page=1')
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.log(err))
        
    },[])


    return ( 
        <div className=''>
        <h1>Filmes</h1>
        {movies.map((filme,index) => (
            <MovieCard filme={filme} key={filme.id}/>
        ))}
        </div>
     );
}

export default Filmes;