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

  // TODO
  // use favorite.clicked state to favorite icon stays active
  // hero page

  useEffect(() => {
    if (query === '') {
      if (localStorage.getItem('favorites') == '[]' || !localStorage.getItem('favorites')) {
        localStorage.setItem('favorites', '[]')
      }
      setLoading(true)
      marvelApi.getAllCharacters(20, (characters: any) => {
        setItems(characters.data.data.results)
        console.warn('Characters loaded successfully')
        setLoading(false)
      })
    } else {
      marvelApi.getCharacterName(query, (characters: any) => {
        setItems(characters.data.data.results)
        console.warn('Characters by name found successfully')
        setLoading(false)
      })
    }
  }, [query])

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
          favorites={(e: any) => setFavorites(e)}
          orderData={(e: any) => setOrderData(e)}
          items={items}
        />
      </div>
    )
  }
}
