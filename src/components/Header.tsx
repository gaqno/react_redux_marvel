import { MinorLogo } from "./MinorLogo";
import { MinorSearch } from "./MinorSearch";

export const Header = () => {
  return (
    <div style={{ flexDirection: "column", ...styles.header }}>
      <MinorLogo />
      <h1> EXPLORE O UNIVERSO</h1>
      <span style={{ paddingBottom: "5%" }}>
        Mergulha no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </span>
      <div style={{ ...styles.searchBar }}>
        <MinorSearch height="25px" width={"25px"} marginY="15px" />
        <input placeholder="Procure por heróis" style={{ ...styles.input }} />
      </div>
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
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    height: "3em",
    borderRadius: "25px",
    backgroundColor: "#fdecec",
    color: "red",
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
