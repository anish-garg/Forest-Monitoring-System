import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Website from './pages/Website'
import Map from './pages/Map'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path='/map'>
              <Route index element={<Map />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
