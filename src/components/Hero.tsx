import React from "react";
import { Search } from "./Search";
import { MinorLogo } from "./UI/MinorLogo";

export const Hero = () => {
  return (
    <div>
      <header>
        <MinorLogo />
        <Search />
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
