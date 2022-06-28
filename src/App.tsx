import IconHero from "./components/IconHero";
import { MinorLogo } from "./components/MinorLogo";
import { MinorSearch } from "./components/MinorSearch";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "30px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MinorLogo height={"50%"} width={"20%"} />
      <h1> EXPLORE O UNIVERSO</h1>
      <p>
        Mergulha no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>

      <div
        style={{
          alignItems: "center",
          width: "60%",
          height: "3em",
          borderRadius: "25px",
          backgroundColor: "black",
          color: "red",
        }}
      >
        <MinorSearch height="25px" width={"25px"} marginY="15px" />
        <span
          style={{
            position: "relative",
            bottom: "25px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          Procure por heróis
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Encontrado x heróis</h3>
          <IconHero />
          {/* Faça um toggle */}
        </div>
      </div>
    </div>
  );
};

export default App;
