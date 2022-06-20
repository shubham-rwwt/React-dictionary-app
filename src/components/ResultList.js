import axios from 'axios'

import React, { useState, useEffect, useContext } from 'react'
import { inputContext } from '../App'
import Antonyms from './Antonyms'
import Example from './Example'
import Meaning from './Meaning'
import Synonym from './Synonym'

const ResultList = () => {
  const [res, setRes] = useState(null)
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const { inputValue } = useContext(inputContext)

  const fetchData = async (searchTerm) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    try {
      setLoading(true)
      const response = await axios(url)
      setRes(response.data)
      setErr(null)
    } catch (error) {
      setErr(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue])

  if (loading) {
    return (
      <div className=" flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl ">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    )
  }
  if (err) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-600  ">
        No Definisions Found.
      </h3>
    )
  }

  return (
    <div className=" container mx-auto p-4 max-w-2xl ">
      {res === null ? (
        ''
      ) : (
        <div>
          <h3 className="text-2xl - font-bold mt-4 mb-4">
            Meaning & Definitions :{' '}
          </h3>
          <Meaning result={res} />
          <h3 className="text-2xl font-bold mt-4 mb-4">Examples : </h3>
          <Example result={res} />
          <h3 className="text-2xl font-bold mt-4 mb-4">Synonyms : </h3>
          <Synonym result={res} />
          <h3 className="text-2xl font-bold mt-4 mb-4">Antonyms : </h3>
          <Antonyms result={res} />
        </div>
      )}
    </div>
  )
}

export default ResultList
