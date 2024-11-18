import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]); // State to store directors data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch directors from the endpoint
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directors:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {isLoading ? (
          <p>Loading directors...</p> // Loading state
        ) : (
          <div>
            {directors.map((director) => (
              <article key={director.id} style={{ marginBottom: "2rem" }}>
                <h2>{director.name}</h2>
                <h3>Movies:</h3>
                <ul>
                  {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Directors;
