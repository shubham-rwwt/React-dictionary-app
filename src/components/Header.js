import React, { useContext, useState } from 'react'
import { inputContext } from '../App'

const Header = () => {
  const [value, setValue] = useState('')

  const { inputValue, setInputValue } = useContext(inputContext)

  const handleinput = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = () => {
    setInputValue(value)
    setValue('')
  }
  const hnadleKeydown = (e) => {
    if (e.key === 'Enter') {
      setInputValue(value)
      setValue('')
    }
  }

  return (
    <div className="bg-purple-600 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white tracking-wider">
          <i className="fa-solid fa-book-atlas text-4xl font-bold text-center mr-4 text-white "></i>
          React Dictionary
        </h1>
        <p className="mt-2 mb-5 text-center text-white text-lg">
          Find Definitions for word
        </p>

        <div className="flex items-center justify-center mt-5 ">
          <div className="flex border-1 border-gray-200 rounded-md">
            <input
              className="px-4 py-2 md:w-80  "
              type="text"
              placeholder="Search..."
              onChange={handleinput}
              onKeyDown={hnadleKeydown}
              value={value}
            />
            <button
              className=" bg-gradient-to-r from-cyan-600 to-blue-600 border-1 px-4 py-2 text-white hover:to-green-400 "
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>

        {inputValue && (
          <h3 className=" mt-8  text-center text-white ">
            Results for :
            <span className="text-white font-bold"> {inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  )
}

export default Header
