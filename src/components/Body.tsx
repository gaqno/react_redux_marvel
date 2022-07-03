import { useEffect } from 'react'
import { Card } from './Card'
import { OnlyFavorites } from './UI/OnlyFavorites'
import { OrderByAZ } from './UI/OrderByAZ'

type BodyProps = {
  totalCards: any
  setTotalCards: any
  items: any
  orderData: any
  favorites: any
}
export const Body = (props: BodyProps) => {
  const { items, totalCards, setTotalCards, orderData, favorites } = props

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTotalCards((totalCardsInsideState: number) => totalCardsInsideState + 20)
      }
    })
    intersectionObserver.observe(document.querySelector<any>('#sentinela'))
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <div className='mobile_landingFilter' style={{ ...styles.heading }}>
        <h4>Encontrados {items.length} heróis</h4>
        <div>
          <OrderByAZ orderData={orderData} />
          <OnlyFavorites favorites={favorites} />
        </div>
      </div>
      <section style={{ ...styles.section, flexWrap: 'wrap' }}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} favorites={favorites} />
        ))}
        <span id='sentinela' style={{ ...styles.sentinela }} />
      </section>
    </>
  )
}

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 'auto',
    margin: '0px 0px 2em',
    alignItems: 'center',
    marginBottom: '2em',
    placeContent: 'space-evenly',
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '70vw',
    height: 'auto',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '15%',
  },
  sentinela: {
    minWidth: '99vw',
    height: '35px',
    marginTop: '25vh',
    backgroundColor: 'red',
  },
}
