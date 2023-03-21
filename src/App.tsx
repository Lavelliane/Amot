import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Directories } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/directories" element={<Directories />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
