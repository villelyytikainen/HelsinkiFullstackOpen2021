import React, { useState, useEffect } from 'react'
import InputField from './components/InputField'
import Filter from'./components/Filter'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('enter name')
  const [newPhone, setNewPhone] = useState('000123123')
  const [filtered, setFiltered] = useState([])
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phoneNumber: newPhone,
    }

    if(persons.filter(p => p.name.toLowerCase() === newPerson.name.toLowerCase()).length > 0){
      persons.map(per => {
        if(per.name.toLowerCase() === newPerson.name.toLowerCase()){
          const confirmUpdate = window.confirm(`Do you want to update ${per.name} phonenumber?`)
          if(confirmUpdate){
            const newPersonInformation = {...per, phoneNumber: newPerson.phoneNumber}
            personService.update(per.id, newPersonInformation)
              .then(res => {
                setPersons(persons.map(pers => pers.id === newPersonInformation.id ? newPersonInformation : pers))
                setNotificationMessage(`${newPersonInformation.name} phonenumber updated`)
                resetNotificationMessage();
              }).catch(error => {
                console.log(error)
                setNotificationMessage(`Contact not found!`)
                resetNotificationMessage();
              })
          }
        }
    })
  }
    else if(newPerson.name.length < 1){
      setNotificationMessage('Enter a name')
      return;
    }
    else{
      personService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationMessage(`${returnedPerson.name} added to the phonebook`)
        resetNotificationMessage();
        setNewName('')
        setNewPhone('')
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const emptyNameField = () => {
    setNewName('');
  }

  const emptyPhoneField = () => {
    setNewPhone('');
  }

  const filterNames = (event) => { 
    setFiltered(persons.filter(newPerson => 
      newPerson.name.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  const deleteContact = (id) => {
    const contact = persons.find(person => person.id === id)
    const confirmDelete = window.confirm(`Delete ${contact.name} from your phonebook?`)
    if(confirmDelete){
      personService.deleteContact(contact.id).then(() => {
        setPersons(persons.filter(person => person !== contact))
        setNotificationMessage(`Contact ${contact.name} was removed from the phonebook.`)
        resetNotificationMessage();
      })
      .catch(error => {
        setNotificationMessage(`Contact ${contact.name} was already removed from the phonebook.`)
        resetNotificationMessage();
      });
    }
  }

  const resetNotificationMessage = () => {
    setTimeout(() => {
      setNotificationMessage('')
    },5000)
  }

  return (
    <div>
      <Notification message={notificationMessage}/>
      <h2>Phonebook</h2>
      <Filter 
        filtered={filterNames}/>
      <h3>Add a new</h3>
      <InputField
        addPerson={addName}
        name={newName} 
        setName={handleNameChange}
        emptyName={emptyNameField}
        phone={newPhone} 
        setPhone={handlePhoneChange}
        emptyPhone={emptyPhoneField}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filtered={filtered} 
        deletePerson={deleteContact}/>
    </div>
  )

}

export default App;


/*
 - Filtering method still doesn't work as intended, 
   app renders all the contacts only when user uses the filtering input field
*/