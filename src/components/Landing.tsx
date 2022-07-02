import { Header } from './Header'
import { Body } from './Body'
import { SetStateAction, useEffect, useState } from 'react'
import { Search } from './Search'
import { marvelApi } from '../services/marvelApi'
import { Loading } from './UI/Loading'

export const Landing = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [orderData, setOrderData] = useState([])
  const [favorites, setFavorites] = useState([])
  const [totalCards, setTotalCards] = useState(20)

  useEffect(() => {
    if (query === '') {
      if (localStorage.getItem('favorites') == '[]' || !localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', '[]')
      }
      setLoading(true)
      marvelApi.getAllCharacters(totalCards, (characters: any) => {
        setItems(characters.data.data.results)
        setLoading(false)
      })
    } else {
      setLoading(true)
      marvelApi.getCharacterName(query, (characters: any) => {
        setItems(characters.data.data.results)
        setLoading(false)
      })
    }
  }, [query, totalCards])

  // useEffect(() => {
  //   if (totalCards) {
  //     setLoading(true)
  //     setItems(totalCards)
  //     setLoading(false)
  //     console.log(totalCards)
  //   }
  // }, [totalCards])

  useEffect(() => {
    if (orderData) {
      setLoading(true)
      setItems(orderData)
      setLoading(false)
    }
  }, [orderData])

  useEffect(() => {
    if (favorites) {
      setLoading(true)
      setItems(favorites)
      setLoading(false)
    }
  }, [favorites])

  const totalCardsHandle = (newValue) => {
    setTotalCards(newValue)
  }

  if (loading) {
    console.warn('Loading...')
    return (
      <>
        <Header />
        <Search style={{ margin: '0 auto' }} search={(q: SetStateAction<string>) => setQuery(q)} />
        <Loading />
      </>
    )
  } else {
    return (
      <div>
        <Header />
        <Search style={{ margin: '0 auto' }} search={(q: SetStateAction<string>) => setQuery(q)} />
        <Body
          setTotalCards={totalCardsHandle}
          totalCards={totalCards}
          favorites={(e: any) => setFavorites(e)}
          orderData={(e: any) => setOrderData(e)}
          items={items}
        />
      </div>
    )
  }
}
