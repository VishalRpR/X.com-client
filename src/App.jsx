import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Parcomp from './pages/Parcomp'
import Signup from './pages/Signup'
import Signin from './pages/Signin'



function App() {




  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/signin' element={<Signin></Signin>} />
          <Route path='/dash' element={<Parcomp></Parcomp>} />
        </Routes>
      </BrowserRouter>



    </div>

  )
}

export default App
