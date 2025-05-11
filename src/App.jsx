import NavBar from './components/NavBar'
import './css/App.css'
import Home from './pages/Home'
import MealDetails from './pages/MealDetails'
import Meals from './pages/Meals'
import Planner from './pages/Planner'
import ShoppingList from './pages/ShoppingList'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/meals' element={<Meals />}/>
          <Route path='/meals/edit/:id' element={<MealDetails />}/>
          <Route path='/planner' element={<Planner />}/>
          <Route path='/shopping-list' element={<ShoppingList />}/>
        </Routes>
      </main>
    </>
  )
}

export default App;