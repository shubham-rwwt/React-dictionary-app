import React from 'react'

const Antonym = ({ result }) => {
  return (
    <div className="columns-2 md:columns-3 ">
      {result.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.antonyms?.map((ant) => (
              <div key={ant}>{ant ? <li>{ant}</li> : ''}</div>
            ))
          }),
        ),
      )}
    </div>
  )
}

export default Antonym
