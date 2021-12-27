import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchlist, addMovieToWatchedlist, moveToWatchlist, removeMovieFromWatchedlist} = useContext(GlobalContext)

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn"
                    onClick={()=> addMovieToWatchedlist(movie)}
                    >
                        <i className="fa-fw far fa-eye"></i>
                    </button>  

                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>    
                </>
            )}

            {type === 'watched' && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => moveToWatchlist(movie)}
                    >
                        <i className="fa-fw far fa-eye-slash"></i>    
                    </button>            
                    
                    <button className="ctrl-btn"
                    onClick={()=>removeMovieFromWatchedlist(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>    
                    </button>            
                </>
            )}
        </div>
    )
}

export default MovieControls
