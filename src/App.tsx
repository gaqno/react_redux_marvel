import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { SetStateAction, useEffect, useState } from "react";
import marvelApi from "./services/marvelApi";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (loading) {
      console.warn("Loading...");
    }
    marvelApi.getAllCharacters(20, (characters: any) => {
      setItems(characters.data.data.results);
      console.log(characters);
      console.warn("Characters loaded successfully");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Search search={(q: SetStateAction<string>) => setQuery(q)} />
        <Body items={items} />
      </>
    );
  }
};

export default App;
