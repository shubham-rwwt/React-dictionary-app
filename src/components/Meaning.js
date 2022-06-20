import React from 'react'

const Meaning = ({ result }) => {
  return (
    <div>
      {result.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              {def.definition ? <li> {def.definition} </li> : ''}
              <hr />
            </div>
          )),
        ),
      )}
    </div>
  )
}

export default Meaning
