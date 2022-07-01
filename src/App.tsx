import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Landing } from './components/Landing'
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='hero' element={<Hero />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Página não encontrada..</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
