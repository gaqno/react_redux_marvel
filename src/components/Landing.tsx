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

  useEffect(() => {
    if (query === '') {
      setLoading(true)
      marvelApi.getAllCharacters(20, (characters: any) => {
        setItems(characters.data.data.results)
        console.warn('Characters loaded successfully')
        setLoading(false)
      })
    } else {
      setLoading(true)
      marvelApi.getCharacterByname(query, (characters: any) => {
        console.log('getCharacterByname', query)
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
      <>
        <Header />
        <Search style={{ margin: '0 auto' }} search={(q: SetStateAction<string>) => setQuery(q)} />
        <Body items={items} orderData={(e: any) => setOrderData(e)} />
      </>
    )
  }
}

// with nameStartsWith doest work
// https://gateway.marvel.com/v1/public/characters?nameStartsWith=S?ts=1656619465167&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=6ca4cd9c5e5281ca2ba2af65a5d3e42e

// without nameStartsWith works
// https://gateway.marvel.com/v1/public/characters?ts=1656619465167&apikey=0d3471b572698cd12b6c88dcaf4ae453&hash=6ca4cd9c5e5281ca2ba2af65a5d3e42e&limit=20
