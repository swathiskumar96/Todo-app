import { Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Todo/>}></Route>

    </Routes>
    </>
  )
}

export default App
