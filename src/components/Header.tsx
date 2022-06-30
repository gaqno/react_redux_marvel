import { MinorLogo } from "./UI/MinorLogo";

export const Header = () => {
  return (
    <div style={{ flexDirection: "column", ...styles.header }}>
      <MinorLogo width="26em" height="10em" />
      <h1 style={{ ...styles.title }}> EXPLORE O UNIVERSO</h1>
      <p style={{ ...styles.subtitle }}>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    width: "80%",
    margin: "30px auto",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: "42px",
  },
  subtitle: {
    color: "grey",
    fontSize: "20px",
  },
};
