import "./App.css";
import { useState } from "react";
import ShowSearch from "../src/components/ShowSearch";
import ShowList from "../src/components/ShowList";
import Header from "../src/components/header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  //console.log(searchTerm);
  return (
    <div className="App">
      <Header />
      <ShowSearch setSearchTerm={setSearchTerm} />
      <ShowList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
