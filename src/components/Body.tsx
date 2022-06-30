import { Card } from './Card'
import { OnlyFavorites } from './UI/OnlyFavorites'
import { OrderByAZ } from './UI/OrderByAZ'

export const Body = ({ items, orderData }: unknown) => {
  return (
    <>
      <div style={{ ...styles.heading }}>
        <h4 style={{ color: '#C9C9C9', fontSize: 22 }}>Encontrados {items.length} heróis</h4>
        <div>
          <OrderByAZ orderData={orderData} />
          <OnlyFavorites />
        </div>
      </div>
      <section style={{ ...styles.section, flexWrap: 'wrap' }}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  )
}

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '0px 0px 2em',
    alignItems: 'center',
    marginBottom: '2em',
    placeContent: 'space-evenly',
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '100%',
    height: 'auto',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '15%',
  },
}
