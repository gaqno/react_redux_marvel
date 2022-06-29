import React, { useState } from "react";
import { MinorSearch } from "./UI/MinorSearch";

const Search = ({ search }: any) => {
  const [text, setText] = useState("");
  const onSearch = (q: React.SetStateAction<string>) => {
    setText(q);
    search(q);
  };
  return (
    <section style={{ ...styles.searchBar }}>
      <MinorSearch height="25px" width={"25px"} marginY="15px" />
      <input
        type="text"
        style={{ ...styles.input }}
        placeholder="Procure por heróis"
        autoFocus
        onChange={(e) => onSearch(e.target.value)}
        value={text}
      />
    </section>
  );
};

const styles = {
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    height: "3em",
    borderRadius: "25px",
    backgroundColor: "#fdecec",
    color: "red",
    margin: "0 auto",
  },
  input: {
    marginLeft: "10px",
    backgroundColor: "#fdecec",
    fontSize: "12px",
    color: "#fa7c7c",
    fontStyle: "#fa7c7c",
    border: "none",
    width: "80%",
    height: "60%",
  },
};
export default Search;
