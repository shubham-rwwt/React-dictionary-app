import React from 'react'

const Synonym = ({ result }) => {
  return (
    <div className="columns-2 md:columns-3 ">
      {result.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.synonyms?.map((syn) => (
              <div key={syn}> {syn ? <li>{syn}</li> : ''} </div>
            ))
          }),
        ),
      )}
    </div>
  )
}

export default Synonym
