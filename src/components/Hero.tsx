import React, { SetStateAction } from "react";
import { Search } from "./Search";
import { MinorLogo } from "./UI/MinorLogo";

type HeroProps = {
  backgroundColor: string;
};

export const Hero = () => {
  return (
    <div style={{}}>
      <header style={{ ...styles.header, flexDirection: "row" }}>
        <MinorLogo width="25em" height="10em" transform={0.5} />
        <Search style={{ ...styles.search }} />
      </header>
      <main>
        <div>Box</div>
        <div>Image</div>
      </main>
      <section>
        <h2>Ultimos lançamentos</h2>
      </section>
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    backgroundColor: "#d5f5d5",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    width: "50em",
    height: "3em",
    margin: "0 0 0 5em",
  },
};
