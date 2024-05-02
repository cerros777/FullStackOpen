import React from 'react'

const Persons = ({filteredPersons, deletePerson}) => {
  return (
    <div>
        {
        filteredPersons.map((person) => (
          <p key={person.id}> {person.name} {person.number} 
          <button onClick={() => deletePerson(person.id, person.name)}>delete</button></p>
        ))
      }
    </div>
  )
}

export default Persons