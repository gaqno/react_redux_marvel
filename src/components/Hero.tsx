import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { marvelApi } from '../services/marvelApi'
import { Search } from './Search'
import { Comics } from './UI/Comics'
import { FavoriteCard } from './UI/FavoriteCard'
import { Loading } from './UI/Loading'
import { MinorLogo } from './UI/MinorLogo'

interface Comics {
  state: any
}

export const Hero = () => {
  const location = useLocation() as unknown as Comics
  const id = location.state.id as Comics
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState<any>([])
  const [comics, setComics] = useState<any>([])

  useEffect(() => {
    if (loading) {
      try {
        setCharacter(location.state)
        marvelApi.getComicsByCharacterId(location.state.id, (comics: any) => {
          setComics(comics.data.data.results)
          setLoading(false)
        })
      } catch (err: any) {
        console.error(err)
      }
    }
  }, [])

  console.log(character, comics)
  if (loading) {
    return <Loading />
  }
  return (
    <div className='mobile_heroContainer' style={{ ...styles.container }}>
      <header
        className='mobile_heroHeader'
        style={{ ...styles.header, flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <MinorLogo className='mobile_heroLogo' width='25em' height='10em' transform={0.6} />
        <Search
          className={'mobile_heroProfile'}
          input={{ backgroundColor: 'white' }}
          style={{ ...styles.search }}
        />
      </header>
      <h1
        className='mobile_heroBgtext'
        style={{ ...styles.bgName, position: 'absolute', textTransform: 'uppercase' }}
      >
        {character.name}
      </h1>
      <section
        className='mobile_heroInfos'
        style={{ display: 'flex', position: 'relative', padding: '0 10em' }}
      >
        <div className='mobile_heroAbout' style={{ ...styles.about }}>
          <span style={{ display: 'flex' }}>
            <h1> {character.name} </h1>
            <FavoriteCard />
          </span>
          {character.description === '' ? (
            <p style={{ fontSize: '16px' }}>Sem descrição disponível</p>
          ) : (
            <p style={{ fontSize: '24px', margin: '0 5em' }}>{character.description}</p>
          )}
          <div
            className='mobile_heroComicsMovies'
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Comics comics={character.comics.available} movies={character.series.available} />
          </div>
          <p style={{ fontSize: '16px', marginBottom: '1em' }}>
            <b>Último quadrinho:</b> {character.modified}
          </p>
        </div>
        <div style={{ ...styles.images }}>
          <img src={character.thumbnail.path + '/portrait_uncanny.jpg'} alt='' />
        </div>
      </section>
      <section>
        <div className='mobile_heroComics' style={{ position: 'relative', padding: '0 10em' }}>
          <h1 style={{ paddingBottom: '5em' }}>Ultimos lançamentos </h1>
          <div>
            {comics.map((comic: any) => {
              return (
                <div key={comic.id} style={{ display: 'inline-grid', paddingLeft: '0.3%' }}>
                  <img
                    src={
                      comic.images.map((img: { path: string }) => img.path) +
                      '/portrait_uncanny.jpg'
                    }
                    alt=''
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  container: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#d5f5d5',
  },
  header: {
    display: 'flex',
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
    margin: '5% 20%',
  },
}
