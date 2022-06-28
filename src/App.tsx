import { MinorLogo } from "./components/MinorLogo";
import { MinorSearch } from "./components/MinorSearch";
import { IconHero } from "./components/IconHero";
import { marvelApi } from "./store";

const App = () => {
  const { data: characters } = marvelApi.useGetCharactersQuery();
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
        <input
          placeholder="Procure por heróis"
          style={{
            position: "relative",
            bottom: "25px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        ></input>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Encontrado x heróis</h3>
          <IconHero />
        </div>
      </div>
    </div>
  );
};

export default App;
