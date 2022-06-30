import React, { SetStateAction } from 'react'
import { Search } from './Search'
import { FavoriteCard } from './UI/FavoriteCard'
import { MinorLogo } from './UI/MinorLogo'

type HeroProps = {
  backgroundColor: string
}

export const Hero = () => {
  return (
    <div style={{ ...styles.container }}>
      <header style={{ ...styles.header, flexDirection: 'row' }}>
        <MinorLogo width='25em' height='10em' transform={0.5} />
        <Search
          input={{ backgroundColor: 'white' }}
          style={{ ...styles.search, backgroundColor: 'white' }}
        />
      </header>
      <main style={{ display: 'flex' }}>
        <div style={{ ...styles.container }}>
          <span style={{ display: 'flex' }}>
            <h1> TITLE </h1>
            <FavoriteCard />
          </span>
          <span>
            <p>Description</p>
          </span>
        </div>
        <div>Image</div>
      </main>
      <section>
        <h2>Ultimos lançamentos</h2>
      </section>
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    backgroundColor: '#d5f5d5',
  },
  header: {
    display: 'flex',
    height: '10em',
  },
  search: {
    width: '35em',
    height: '3em',
    margin: '3em 0 0 1em',
  },
  about: {},
}
