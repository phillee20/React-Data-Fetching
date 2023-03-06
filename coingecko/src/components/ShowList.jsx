import "../App.css";
import { useEffect, useState } from "react";

function ShowList({ searchTerm }) {
  //console.log(searchTerm);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setShows(data);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <h3>Loading TV shows...</h3>;
  }

  return (
    <main>
      <h2>List of TV Show results below</h2>

      {shows.map((show) => {
        return (
          <li key={show.show.id}>
            <h3 id="title">Title: {show.show.name}</h3>
            <p>
              <strong>Language: {show.show.language}</strong>
            </p>
            <div>{show.show.summary}</div>
          </li>
        );
      })}
    </main>
  );
}

export default ShowList;
