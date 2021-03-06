import React, { useState } from 'react'
import { marvelApi } from '../../services/marvelApi'

export const OrderByAZ = ({ orderData }: any) => {
  const [clicked, setClicked] = useState(false)

  const clickHandle = () => {
    setClicked(true)
    marvelApi.orderByDesc((character: any) => {
      return orderData(character.data.data.results)
    })
    if (clicked) {
      setClicked(false)
      marvelApi.orderByAcd((character: any) => {
        return orderData(character.data.data.results)
      })
    }
  }

  return (
    <button style={{ ...styles.button }} onClick={clickHandle}>
      <svg xmlns='http://www.w3.org/2000/svg' width='15em' height='27'>
        <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
          <g fill='red' fillRule='nonzero' transform='translate(-78 -824)'>
            <g transform='translate(78 824)' width='10'>
              <path d='M8.775 5.398a2.7 2.7 0 100-5.398 2.7 2.7 0 000 5.398zM5.13 14.974a1.893 1.893 0 01-1.804-.268 10.69 10.69 0 01-1.013-.88L0 21.28s1.187.134 2.951.297l2.179-6.603z'></path>
              <path d='M11.58 14.756a1.305 1.305 0 00-.06-.157 185.05 185.05 0 011.203-6.081c.767.487 1.232 1.03 1.271 1.506.056.6-.52 1.389-1.624 2.24a1.198 1.198 0 00.728 2.156c.264 0 .52-.086.728-.246 1.832-1.4 2.694-2.862 2.565-4.352A3.92 3.92 0 0015.07 7.32a7.946 7.946 0 00-1.82-1.254 1.12 1.12 0 00-.342-.107.94.94 0 00-.364-.056H5.006a.969.969 0 00-.37.062 1.02 1.02 0 00-.318.106 7.762 7.762 0 00-1.82 1.25 3.92 3.92 0 00-1.316 2.502c-.135 1.49.728 2.952 2.559 4.352a1.204 1.204 0 001.68-.224 1.204 1.204 0 00-.23-1.68c-1.12-.84-1.68-1.63-1.624-2.24.04-.47.499-1.014 1.26-1.501.426 1.993.823 3.998 1.187 5.98a1.613 1.613 0 00-.072.174l-3.327 10.08a1.546 1.546 0 001.473 2.033 1.557 1.557 0 001.478-1.036l3.187-9.688 3.214 9.744a1.546 1.546 0 001.96.986 1.546 1.546 0 00.986-1.955L11.58 14.756zm-1.5-3.282l-1.294-.666-1.27.666.24-1.394L6.72 9.06l1.417-.206.638-1.288.633 1.288 1.417.207L9.81 10.08l.269 1.394z'></path>
              <path d='M7.543 21.918c.814.045 1.632.079 2.453.101L8.753 18.25l-1.21 3.668zM14.24 14.706a1.876 1.876 0 01-1.12.386c-.251 0-.5-.049-.733-.146l2.285 7.006a9.52 9.52 0 003.248-.672l-2.52-7.6a11.2 11.2 0 01-1.16 1.026z'></path>
              <text style={{ fontSize: '18px' }} x='25' y='15' fill='#FA8C8C'>
                Ordenar por nome - A/Z
              </text>
            </g>
          </g>
        </g>
      </svg>
      {clicked ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='75'
          height='41'
          style={{ marginRight: '50px' }}
          viewBox='0 0 75 41'
        >
          <defs>
            <circle id='path-1' cx='55.5' cy='19.5' r='10.5'></circle>
            <filter
              id='filter-2'
              width='228.6%'
              height='228.6%'
              x='-64.3%'
              y='-50%'
              filterUnits='objectBoundingBox'
            >
              <feOffset dy='3' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
              <feGaussianBlur
                in='shadowOffsetOuter1'
                result='shadowBlurOuter1'
                stdDeviation='4'
              ></feGaussianBlur>
              <feColorMatrix
                in='shadowBlurOuter1'
                values='0 0 0 0 0.881029212 0 0 0 0 0 0 0 0 0 0 0 0 0 0.603747815 0'
              ></feColorMatrix>
            </filter>
          </defs>
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g transform='translate(-80 -1126)'>
              <g transform='translate(80 1126)'>
                <rect width='75' height='39' x='0' y='0' fill='#E4E5E9' rx='19.5'></rect>
                <g>
                  <use fill='#000' filter='url(#filter-2)' xlinkHref='#path-1'></use>
                  <use fill='red' xlinkHref='#path-1'></use>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='75'
          height='41'
          style={{ marginRight: '50px' }}
          viewBox='0 0 75 41'
        >
          <defs>
            <circle id='path-1' cx='55.5' cy='19.5' r='10.5'></circle>
            <filter
              id='filter-2'
              width='228.6%'
              height='228.6%'
              x='-64.3%'
              y='-50%'
              filterUnits='objectBoundingBox'
            >
              <feOffset dy='3' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
              <feGaussianBlur
                in='shadowOffsetOuter1'
                result='shadowBlurOuter1'
                stdDeviation='4'
              ></feGaussianBlur>
              <feColorMatrix
                in='shadowBlurOuter1'
                values='0 0 0 0 0.881029212 0 0 0 0 0 0 0 0 0 0 0 0 0 0.603747815 0'
              ></feColorMatrix>
            </filter>
          </defs>
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g transform='translate(-208 -1124)'>
              <g transform='rotate(-180 141.5 582.5)'>
                <rect width='75' height='39' x='0' y='0' fill='#E4E5E9' rx='19.5'></rect>
                <g>
                  <use fill='#000' filter='url(#filter-2)' xlinkHref='#path-1'></use>
                  <use fill='red' xlinkHref='#path-1'></use>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
    </button>
  )
}

const styles = {
  button: {
    border: 0,
    backgroundColor: 'transparent',
  },
}
