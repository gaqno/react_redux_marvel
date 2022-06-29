import { Header } from "./Header";
import { Body } from "./Body";
import { SetStateAction, useEffect, useState } from "react";
import { Search } from "./Search";
import { marvelApi } from "../services/marvelApi";
import { Loading } from "./UI/Loading";

export const Landing = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    if (query === "") {
      setLoading(true);
      marvelApi.getAllCharacters(20, (characters: any) => {
        setItems(characters.data.data.results);
        console.warn("Characters loaded successfully");
        setLoading(false);
      });
    } else {
      setLoading(true);
      marvelApi.getCharacterByname(query, (characters: any) => {
        console.log("getCharacterByname", query);
        setItems(characters.data.data.results);
        console.warn("Characters by name found successfully");
        setLoading(false);
      });
    }
  }, [query]);

  useEffect(() => {
    if (orderData) {
      setLoading(true);
      setItems(orderData);
      setLoading(false);
    }
  }, [orderData]);

  if (loading) {
    console.warn("Loading...");
    return (
      <>
        <Header />
        <Search search={(q: SetStateAction<string>) => setQuery(q)} />
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Search search={(q: SetStateAction<string>) => setQuery(q)} />
        <Body items={items} orderData={(e: any) => setOrderData(e)} />
      </>
    );
  }
};
