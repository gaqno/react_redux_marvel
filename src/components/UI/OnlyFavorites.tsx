import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const OnlyFavorites = ({ favorites }: any) => {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()
  const handleFavorite = () => {
    setClicked(!clicked)
    if (!clicked) {
      const favorite = JSON.parse(localStorage.getItem('favorites') || '{}')
      while (favorite.length < 5) {
        favorites(favorite)
      }
    } else {
      window.location.reload()
    }
  }
  return (
    <>
      <button style={{ ...styles.button }} onClick={handleFavorite}>
        {clicked ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            style={{ marginTop: '10px' }}
            width='15em'
            height='30'
          >
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
              <g fill='red' fillRule='nonzero' transform='translate(-155 -829)'>
                <path d='M171.429 839.053l-7.16 7.832a.358.358 0 01-.267.115c-.101 0-.198-.04-.267-.115l-7.16-7.832c-2.1-2.293-2.1-6.022 0-8.315 1.023-1.122 2.388-1.738 3.843-1.738 1.333 0 2.593.516 3.584 1.465.99-.95 2.247-1.465 3.58-1.465 1.455 0 2.824.616 3.85 1.738 2.093 2.293 2.09 6.022-.003 8.315z'></path>
              </g>
            </g>
            <text style={{ fontSize: '18px' }} x='30' y='15' fill='#FA8C8C'>
              Somente favoritos
            </text>
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' width='15em' height='30'>
            <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
              <g fillRule='nonzero' stroke='red' strokeWidth='2' transform='translate(-231 -828)'>
                <path d='M248.429 839.053l-7.16 7.832a.358.358 0 01-.267.115c-.101 0-.198-.04-.267-.115l-7.16-7.832c-2.1-2.293-2.1-6.022 0-8.315 1.023-1.122 2.388-1.738 3.843-1.738 1.333 0 2.593.516 3.584 1.465.99-.95 2.247-1.465 3.58-1.465 1.455 0 2.824.616 3.85 1.738 2.093 2.293 2.09 6.022-.003 8.315z'></path>
              </g>
            </g>
            <text style={{ fontSize: '18px' }} x='30' y='15' fill='#FA8C8C'>
              Somente favoritos
            </text>
          </svg>
        )}
      </button>
    </>
  )
}

const styles = {
  button: {
    border: 0,
    backgroundColor: 'transparent',
  },
}
