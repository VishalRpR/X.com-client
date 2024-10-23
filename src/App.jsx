import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Parcomp from './pages/Parcomp'
import Signup from './pages/Signup'



function App() {




  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/signin' element={<Signup></Signup>} />
          <Route path='/dash' element={<Parcomp></Parcomp>} />
        </Routes>
      </BrowserRouter>



    </div>

  )
}

export default App
