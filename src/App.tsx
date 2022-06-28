import { Header } from "./components/Header";
import { Body } from "./components/Body";
import "./App.css";
import { marvelApi } from "./app/apiSlice";
import { useEffect, useState } from "react";

const App = () => {
  const {
    data: info,
    isLoading,
    isSuccess,
  } = marvelApi.useGetCharactersQuery();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    if (isLoading) {
      return console.warn("Loading characters");
    }
    if (isSuccess) {
      setCharacters(info.data.results);
      console.warn("Sucessfully loaded characters");
      console.log("App:", characters);
    }
  }, [characters]);
  return (
    <>
      <Header />
      <Body characters={characters} />
    </>
  );
};

export default App;
