import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from "./components/TopBar";
import { PokeList } from "./components/PokeList";
import { BottomBar } from "./components/BottomBar";
function App() {
  
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  )
}
export default App
