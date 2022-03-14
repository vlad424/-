import React from 'react';

const Movies:React.FC = () => {
    const movies = [
        {name: 'hello world', id: 0},
        {name: 'hello world', id: 1},
        {name: 'hello world', id: 2},
        {name: 'hello world', id: 3},
        {name: 'hello world', id: 4},
        {name: 'hello world', id: 5},
        {name: 'hello world', id: 6},
        {name: 'hello world', id: 7},
    ]
    
    return (
        <div className="movies">
        {movies.map(movie => {
            return (
            <div className="movie">
                <h3>{movie.name}</h3>    
            </div>
            );
        })}
        </div>
    );
};

export default Movies;