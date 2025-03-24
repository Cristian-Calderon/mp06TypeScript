import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Joc from './pages/Joc/Joc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Joc/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
