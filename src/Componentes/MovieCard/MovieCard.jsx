import {Link} from 'react-router-dom'


function MovieCard({filme}) {
    return(
        <div className='movieCard'>
        <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} />
        <p>{filme.title}</p>
        <Link to={`${filme.id}`}>SaberMais</Link>
        </div>
    );
}

export default MovieCard;