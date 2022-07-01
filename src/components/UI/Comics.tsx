import React from 'react'

type Comics = {
  comics: number
  movies: number
}
export const Comics = (props: Comics) => {
  const { comics, movies } = props
  return (
    <>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            width: '100',
            height: '100',
            margin: '1em',
          }}
          viewBox='0 0 100 31'
        >
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g fill='red' fillRule='nonzero' transform='translate(-303 -823)'>
              <g transform='translate(303 823)'>
                <path d='M10.41 0C8.615 7.045 6.103 8.807 0 10.92v4.932L12.923 31v-4.58c5.385-1.76 8.615-5.636 10.77-10.215L10.41 0zm2.872 31c6.82-1.761 11.487-3.523 13.641-4.58v-3.864c-3.32 2.597-9.65 6.239-13.64 7.74V31zM14 1.761l-.673.66 10.926 13.332a.71.71 0 01.09.738c-2.187 4.65-5.534 8.782-11.06 10.634l.01.793c5.744-1.41 10.04-6.43 13.989-11.009L14 1.761zm-2.692 3.402l2.871 3.17a.71.71 0 01.113.76c-1.486 3.281-3.45 5.22-6.428 6.682A.75.75 0 017 15.61l-3.23-3.523c-.321-.353-.127-1.013.336-1.145 3.472-1.022 4.602-2.137 6.001-5.57.418-.534.673-.55 1.2-.209zm-.37 1.717C9.713 9.435 8.155 10.925 5.53 11.9l2.154 2.345c2.334-1.235 3.84-2.733 5.093-5.328l-1.84-2.037zm15.368 12.242c-3.322 3.783-8.256 8.223-13.024 9.764v.705c5.385-1.41 10.41-5.284 14.718-8.807l-1.694-1.662z'></path>
                <text
                  style={{
                    fontSize: '18px',
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                  }}
                  fill='black'
                  x='0'
                  y='-20'
                >
                  Quadrinhos
                </text>
                <text style={{ fontSize: '18px', fontWeight: 'bold' }} x='50' y='20' fill='black'>
                  {comics ? comics : 0}
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            width: '100',
            height: '100',
            margin: '1em',
          }}
          x='15'
          y='15'
          viewBox='0 0 100 31'
        >
          <text
            style={{
              fontSize: '18px',
              color: 'black',
              fontWeight: 'bold',
              marginBottom: '15px',
            }}
            fill='black'
            x='0'
            y='-20'
          >
            Filmes
          </text>
          <text style={{ fontSize: '18px', fontWeight: 'bold' }} x='55' y='15' fill='black'>
            {movies ? movies : 0}
          </text>
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g fill='red' fillRule='nonzero' transform='translate(-384 -828)'>
              <path d='M411.615 828h-25.23c-.633 0-1.24.259-1.686.719a2.491 2.491 0 00-.699 1.735v18.092c0 1.355 1.068 2.454 2.385 2.454h25.23c1.317 0 2.385-1.099 2.385-2.454v-18.092c0-1.355-1.068-2.454-2.385-2.454zm-22.62 18.614c0 .213-.17.386-.381.386h-3.233a.384.384 0 01-.381-.386v-2.228c0-.213.17-.386.381-.386h3.238c.21 0 .381.173.381.386l-.005 2.228zm0-6c0 .213-.17.386-.381.386h-3.233a.384.384 0 01-.381-.386v-2.228c0-.213.17-.386.381-.386h3.238c.21 0 .381.173.381.386l-.005 2.228zm0-6.001c0 .214-.17.387-.381.387h-3.233a.384.384 0 01-.381-.387v-2.237a.384.384 0 01.381-.376h3.238c.21 0 .381.173.381.387l-.005 2.226zm13.575 6.206l-6.232 4.044a.825.825 0 01-.89.013.97.97 0 01-.448-.832v-8.088a.97.97 0 01.447-.832.825.825 0 01.89.013l6.233 4.044c.267.172.43.483.43.819a.972.972 0 01-.43.82zm10.43 5.795c0 .213-.17.386-.381.386h-3.238a.384.384 0 01-.381-.386v-2.228c0-.213.17-.386.381-.386h3.238c.21 0 .381.173.381.386v2.228zm0-6c0 .213-.17.386-.381.386h-3.238a.384.384 0 01-.381-.386v-2.228c0-.213.17-.386.381-.386h3.238c.21 0 .381.173.381.386v2.228zm0-6c0 .213-.17.386-.381.386h-3.238a.384.384 0 01-.381-.386v-2.228c0-.213.17-.386.381-.386h3.238c.21 0 .381.173.381.386v2.228z'></path>
            </g>
          </g>
        </svg>
      </div>
    </>
  )
}
