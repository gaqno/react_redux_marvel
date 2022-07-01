import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Search } from './Search'
import { Comics } from './UI/Comics'
import { FavoriteCard } from './UI/FavoriteCard'
import { Loading } from './UI/Loading'
import { MinorLogo } from './UI/MinorLogo'

export const Hero = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState<any>([])
  const [comics, setComics] = useState<any>([])

  useEffect(() => {
    if (loading) {
      setCharacter(location.state)
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div style={{ ...styles.container }}>
      <header style={{ ...styles.header, flexDirection: 'row', flexWrap: 'wrap' }}>
        <MinorLogo width='25em' height='10em' transform={0.6} />
        <Search input={{ backgroundColor: 'white' }} style={{ ...styles.search }} />
      </header>
      <div style={{ position: 'absolute' }}>
        <h1 style={{ ...styles.bgName, textTransform: 'uppercase' }}>{character.name}</h1>
      </div>
      <main style={{ display: 'flex', position: 'relative', padding: '10em' }}>
        <div style={{ ...styles.about }}>
          <span style={{ display: 'flex' }}>
            <h1> {character.name} </h1>
            <FavoriteCard />
          </span>
          {character.description === '' ? (
            <p style={{ fontSize: '16px' }}>Sem descrição disponível</p>
          ) : (
            <p style={{ fontSize: '24px' }}>{character.description}</p>
          )}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Comics comics={character.comics.available} movies={character.series.available} />
          </div>
          <p style={{ fontSize: '24px' }}>
            <b>Último quadrinho:</b> {character.modified}
          </p>
        </div>
        <div style={{ ...styles.images }}>
          <img src={character.thumbnail.path + '/portrait_uncanny.jpg'} alt='' />
        </div>
      </main>
      <section style={{ display: 'relative', justifyContent: 'center' }}>
        <h2>Ultimos lançamentos</h2>
      </section>
    </div>
  )
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#d5f5d5',
  },
  header: {
    display: 'flex',
    height: '10em',
  },
  search: {
    width: '65em',
    height: '3em',
    margin: '3em 0 0 1em',
    backgroundColor: 'white',
  },
  about: {
    width: '50%',
    fontSize: '52px',
  },
  images: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
  },
  bgName: {
    fontSize: '13em',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.5,
    zIndex: 0,
    width: '80vw',
    margin: '5% 20%',
  },
}
