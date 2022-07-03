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
    const fetchData = async () => {
      if (query === '') {
        localStorage.setItem('favorites', '[]')
        await marvelApi.getAllCharacters(totalCards, (characters: any) => {
          setItems(characters.data.data.results)
        })
        setLoading(false)
      } else {
        localStorage.getItem('favorites' || '[]')
        await marvelApi.getCharacterName(query, (characters: any) => {
          setItems(characters.data.data.results)
        })
        setLoading(false)
      }
    }
    const timer = setTimeout(() => {
      fetchData()
    }, 100)
    return () => clearTimeout(timer)
  }, [query, totalCards])

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

  const totalCardsHandle = (newValue: any) => {
    setTotalCards(newValue)
  }

  if (loading) {
    console.warn('Loading...')
    return (
      <>
        <Header />
        <Search
          className='mobile_landingSearch'
          style={{ margin: '0 auto' }}
          search={(q: SetStateAction<string>) => setQuery(q)}
        />
        <Loading />
      </>
    )
  } else {
    return (
      <div>
        <Header />
        <Search
          className='mobile_landingSearch'
          style={{ margin: '0 auto' }}
          search={(q: SetStateAction<string>) => setQuery(q)}
        />
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
