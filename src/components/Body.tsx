import { useEffect, useState } from 'react'
import { marvelApi } from '../services/marvelApi'
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
        console.log('Element is visiable', totalCards)
        setTotalCards((totalCardsInsideState: number) => totalCardsInsideState + 5)
      }
    })
    intersectionObserver.observe(document.querySelector<any>('#sentinela'))
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <div style={{ ...styles.heading }}>
        <h4 style={{ color: '#C9C9C9', fontSize: 22 }}>Encontrados {items.length} heróis</h4>
        <div>
          <OrderByAZ orderData={orderData} />
          <OnlyFavorites favorites={favorites} />
        </div>
      </div>
      <h1>Pagina atual: {totalCards}</h1>
      <section style={{ ...styles.section, flexWrap: 'wrap' }}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} favorites={favorites} />
        ))}
        <span
          id='sentinela'
          style={{ width: '100%', height: '10px', backgroundColor: 'red' }}
        ></span>
      </section>
    </>
  )
}

const styles = {
  heading: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
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
}
