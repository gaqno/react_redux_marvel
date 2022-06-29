import { SetStateAction, useState } from "react";
import Search from "./Search";
import { MinorLogo } from "./UI/MinorLogo";
import { MinorSearch } from "./UI/MinorSearch";

export const Header = () => {
  return (
    <div style={{ flexDirection: "column", ...styles.header }}>
      <MinorLogo />
      <h1> EXPLORE O UNIVERSO</h1>
      <span style={{ paddingBottom: "5%" }}>
        Mergulha no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </span>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    width: "80%",
    margin: "30px auto",
    alignItems: "center",
  },
};
