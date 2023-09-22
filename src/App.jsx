import './App.css'
// import cat2 from "./assets/cat2.jpg"
// import Cat from "./components/Cat.jsx"
// import {Personal} from './components/Personal'
// import Hobbies from "./components/Hobbies"
// import Food from "./components/Food"
// import StackTec from "./components/StackTec";
import CardExample from './components/CardExample'

function App() {
  
  return (
    <main className='main_container'>
      {/* <h2>Listado de gatos</h2> */}

      {/* <Cat /> */}
      {/* <article className='cat'>
        <header>
        <img src={cat2} alt="" />
        </header>
        <h4>Gato feliz</h4>
      </article> */}
      {/* <Personal />
      <Hobbies />
      <Food />
      <StackTec /> */}
      <CardExample />
    </main>
  )
}

export default App
