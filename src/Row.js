import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";



function Row({title, fetchUrl, isLargeRow = false}) {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies, setMovies] = useState([]);

    const base_url ="https://image.tmdb.org/t/p/original/";

    useEffect(() =>{
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }

      fetchData();
    }, [fetchUrl]);

  //  console.log(movies);

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert("Temporarily unavailable"));
    }
  };
  const opts = {
    height: "400px",
    width: "100%",
    playerVar: {
      autoplay: 1,
    },
  };



  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              // <div>
              <img
                onClick={() => handleTrailer(movie)}
                className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              // <h4 className="row_name">
              //   {movie.original_name || movie.original_title}
              // </h4>
              // </div>
            )
        )}
      </div>
      {trailerUrl && <YouTube opts={opts} videoId={trailerUrl} />}
    </div>
  );
  
}
export default Row;