import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store the movie data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch movie details by ID
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Movie not found");
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <p>Loading movie details...</p>
        </main>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Movie not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Duration: {movie.time} minutes</p>
        <div>
          <h3>Genres:</h3>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
