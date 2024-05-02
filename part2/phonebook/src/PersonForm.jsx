import React from 'react'

const PersonForm = ({newName, newNumber, handleNameChange, hangleNumberChange, addPerson}) => {
  return (
    <div>
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={hangleNumberChange} />
            </div>
            <div>
                <button type="submit" onClick={addPerson}>add</button>
            </div>
        </form>
    </div>
  )
}

export default PersonForm