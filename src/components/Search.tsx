import React, { useState } from 'react'
import { MinorSearch } from './UI/MinorSearch'

type SearchProps = {
  search?: any
  style?: any
  input?: any
  className?: any
}

export const Search = (props: SearchProps) => {
  const { search, style, input, className } = props
  const [text, setText] = useState('')
  const onSearch = (q: any) => {
    setText(q)
    search(q)
  }

  return (
    <section className={className} style={{ ...styles.searchBar, ...style }}>
      <MinorSearch />
      <input
        type='text'
        style={{ ...styles.input, ...input }}
        placeholder='Procure por heróis'
        autoFocus
        onChange={(e) => onSearch(e.target.value)}
        value={text}
      />
    </section>
  )
}

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    width: '65%',
    height: '5em',
    borderRadius: '50px',
    backgroundColor: '#fdecec',
    color: 'red',
    margin: '0px auto',
    marginBottom: '4em',
  },
  input: {
    marginLeft: '1em',
    backgroundColor: '#fdecec',
    fontSize: '16px',
    color: '#fa7c7c',
    fontStyle: '#fa7c7c',
    border: 'none',
    width: '80%',
    height: '60%',
  },
}
