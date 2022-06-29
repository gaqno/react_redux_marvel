import { MinorLogo } from "./UI/MinorLogo";

export const Header = () => {
  return (
    <div style={{ flexDirection: "column", ...styles.header }}>
      <MinorLogo />
      <h1> EXPLORE O UNIVERSO</h1>
      <p style={{ ...styles.subtitle }}>
        Mergulha no domínio deslumbrante de todos os personagens clássicos que
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
  },
  subtitle: {
    color: "grey",
  },
};
