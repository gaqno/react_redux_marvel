import { Card } from "./Card";
import { OnlyFavorites } from "./UI/OnlyFavorites";
import { OrderByAZ } from "./UI/OrderByAZ";

export const Body = ({ items, orderData }: any) => {
  return (
    <>
      <div style={{ ...styles.heading }}>
        <h4 style={{ color: "#C9C9C9", fontSize: 18 }}>
          Encontrados {items.length} heróis
        </h4>
        <div>
          <OrderByAZ orderData={orderData} />
          <OnlyFavorites />
        </div>
      </div>
      <section style={{ ...styles.section, flexWrap: "wrap" }}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

const styles = {
  heading: {
    display: "flex",
    justifyContent: "space-between",
    width: "68em",
    margin: "0 auto",
    alignItems: "center",
    marginBottom: "2em",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    width: "80%",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "15%",
  },
};
