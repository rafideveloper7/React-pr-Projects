import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header.jsx/Header'
import Footer from './components/Footer/Footer.jsx'
import Counter from './components/Counter.jsx/Counter'
import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'

function App() {
  const [page, setPage] = useState("home")
  

  return (
    <>
      <Header changePage={setPage} />
      
        {page === "counter" && <Counter />}
        {page === "posts" &&  <Posts />}
        {page === "home" && <Home  />}
      
      {/* <Footer /> */}
    </>
  )
}

export default App
