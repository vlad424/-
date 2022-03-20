import React from 'react';

const Movies:React.FC = () => {
    const movie = [
      {content: "", id: 0},
      {content: "", id: 0},
      {content: "", id: 0},
      {content: "", id: 0},
      {content: "", id: 0},
      
    ]
  
    return (
        <div className="movies">
          {movie.map(mov => {
            return (
              <div className="movie">
                {mov.content}
              </div>
            )
          })}
        </div>
    );
};

export default Movies;