import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import  Persons from './Persons'
import personService from './assets/persons'
import Message from './Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(personObject)

    const existingPerson = persons.find(person => person.name === newName);
    //console.log(existingPerson.id);
    if (existingPerson) {
      const confirmReplace = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`);
      if(confirmReplace){
        personService
        .update(existingPerson.id, personObject)
        .then(updatePerson => {
          setPersons(persons.map(person => person.id === existingPerson.id ?  updatePerson : person ))
          setNewName('')
          setNewNumber('')
          setMessage(`${updatePerson.name} updated`)
          setTimeout(() => {
          setMessage(null)
        }, 5000)
        })
        .catch(error  => {
          setMessage(`${personObject.name} has been removed from server`)
          setTimeout(()=> {
            setMessage(null)
          },3000)
        })
      return;
      }
    }

    personService
      .create(personObject)
      .then(returnedPerson=> {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`${returnedPerson.name} Added to phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        console.log('error creating person', error);
      })
    }
    
    const deletePerson = (id, personName) => {
      const confirmDelete = window.confirm(`Delete ${personName}`);
      if (confirmDelete) {
        personService
          .deletePersons(id)
          .then(() => {
            setPersons(persons.filter(person => person.id !== id));
          })
          .catch(error => {
            console.error('Error deleting person:', error);
          });
      }
    };

    const handleNameChange = (event) => {
      console.log(event.target.value);
    setNewName(event.target.value)
  }

  const hangleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter((person) => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

       <h2>Add a new</h2> 
      <Message message={message}/>
      <PersonForm 
      newName={newName}  
      newNumber={newNumber} 
      handleNameChange={handleNameChange} 
      hangleNumberChange={hangleNumberChange} 
      addPerson={addPerson}
      />
      <h2>Numbers</h2>
      
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}  />
    </div>
  )
}

export default App