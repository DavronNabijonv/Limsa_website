
import './App.css'
import Navbar from './sections/nav_contactFooter/navbar'

function App() {

  const routes = [
    {
      id:1,
      path:'/home',
      element:''
    }
  ]

  return (
    <>
      <header>
        <Navbar/>
      </header>
    </>
  )
}

export default App
