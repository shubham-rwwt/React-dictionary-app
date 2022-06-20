import { createContext, useState } from 'react'
import Header from './components/Header'
import ResultList from './components/ResultList'

import './App.css'

export const inputContext = createContext()

function App() {
  const [inputValue, setInputValue] = useState('')

  const value = {
    inputValue,
    setInputValue,
  }

  return (
    <inputContext.Provider value={value}>
      <div className="App">
        <Header />
        <ResultList />
      </div>
    </inputContext.Provider>
  )
}

export default App
