import { Link, Outlet } from "react-router-dom";
import { FavoriteCard } from "./UI/FavoriteCard";

export const Card = ({ item }: any) => {
  // const favorite = (item: any) => {
  //   var previousData = JSON.parse(localStorage.getItem("favorites") || "{}");
  //   previousData.push(item);
  //   localStorage.setItem("favorites", JSON.stringify(previousData));
  // };

  return (
    <div style={{ ...styles.container, flexDirection: "column" }}>
      <Link to={"/hero"} style={{ ...styles.img }}>
        <img
          style={{ width: "100%", height: "100%", borderBottom: "red solid" }}
          src={item.thumbnail.path + "/standard_fantastic.jpg"}
          alt=""
        />
        <div style={{ ...styles.bottom, flexDirection: "row" }}>
          <h2>{item.name}</h2>
          <FavoriteCard />
        </div>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "13em",
    height: "25em",
    flexDirection: "column",
    margin: "0 2em",
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  img: {
    textDecoration: "none",
    width: "100%",
  },
};
