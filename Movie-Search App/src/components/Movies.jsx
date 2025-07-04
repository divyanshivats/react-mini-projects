import React, { useState } from "react";
import "./Movies.css";

const Movies = ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="movies-container">
        {data?.results.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => handleCardClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-card-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-rating">⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="modal-poster"
            />
            <div className="modal-details">
              <h2>{selectedMovie.title}</h2>
              <p><strong>⭐ Rating:</strong> {selectedMovie.vote_average}</p>
              <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
              <p><strong>🤖 About Movie:</strong> {selectedMovie.overview}</p>
             
            </div>
            <button className="modal-close" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
