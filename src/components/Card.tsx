import { Favorite } from "./UI/Favorite";

export const Card = ({ item }: any) => {
  console.log("Card", item);
  const favorite = (item: any) => {
    var previousData = JSON.parse(localStorage.getItem("favorites") || "{}");
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  return (
    <div style={{ ...styles.container, flexDirection: "column" }}>
      <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt="" />
      <div style={{ ...styles.bottom, flexDirection: "row" }}>
        <h2>{item.name}</h2>
        <Favorite />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "11.5em",
    flexDirection: "column",
    margin: "0px 5em 2em 5em",
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
};
