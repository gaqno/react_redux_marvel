import { Key } from "react";
import { Result } from "../models/characters";
import { Card } from "./Card";
import { IconHero } from "./IconHero";
import { ToogleOn } from "./ToogleOn";

export const Body = ({ characters }: any) => {
  console.log("Body", characters);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <h3>Encontrado x heróis</h3>
        <span>
          <IconHero />
          <ToogleOn />
        </span>
      </div>
      <section>
        <Card characters={characters} />
      </section>
    </>
  );
};
