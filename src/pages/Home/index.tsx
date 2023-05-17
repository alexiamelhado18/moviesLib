import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState<any>([]);

  const getTopRatedMovies = async (url: any) => {

    const res = await fetch(url);
    await res.json().then((data) => {
      setTopMovies(data.results);
    });

  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <main className="container">
      <h1>Melhores filmes:</h1>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando</p>}
        {topMovies.length > 0 && topMovies.map((movie: any) =>
          <p>{movie.title}</p>
        )}
      </div>
    </main>
  );

}
export default Home;