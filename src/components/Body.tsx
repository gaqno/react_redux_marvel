import { Card } from "./Card";
import { IconHero } from "./UI/IconHero";
import { ToogleOn } from "./UI/ToogleOn";

export const Body = ({ items }: any) => {
  console.log("Body", items);
  return (
    <>
      <div style={{ ...styles.heading }}>
        <h3>Encontrado {items.length} heróis</h3>
        <span>
          <IconHero />
          <ToogleOn />
        </span>
      </div>
      <section style={{ ...styles.section, flexWrap: "wrap" }}>
        {items.map((item: any) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </section>
    </>
  );
};

const styles = {
  heading: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
    alignItems: "center",
  },
  section: {
    display: "flex",
    justifyContent: "center",
  },
};
