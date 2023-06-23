import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './views/notfound'

function App() {
  return <BrowserRouter>
    <Routes>
      {/* <Route path='/' exact component={Home} /> */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
}

export default App
