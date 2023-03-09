import "../App.css";
import { useEffect, useState } from "react";

function ShowList({ searchTerm }) {
  //console.log(searchTerm);
  const [shows, setShows] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setShows(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <h3>Loading TV shows...</h3>;
  }

  if (isError) return <h3>Error</h3>;

  return (
    <main>
      <h2>List of TV Show results below</h2>

      {shows.map((programme) => {
        if (programme.show.image) {
          return (
            <li className="showList" key={programme.show.id}>
              <img src={programme.show.image.medium} alt="This is an image" />

              <h3 id="title">Title: {programme.show.name}</h3>
              <div className="language">
                <strong>Language: {programme.show.language}</strong>
              </div>
              <div>{programme.show.summary}</div>
            </li>
          );
        } else {
          return (
            <img
              id="notFoundImage"
              src={
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }
              alt="This is an image"
            />
          );
        }
      })}
    </main>
  );
}

export default ShowList;
