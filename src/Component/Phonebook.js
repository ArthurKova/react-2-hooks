import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm/';
import Filter from './Filter/';
import ContactList from './ContactList/';

import propTypes, { object } from 'prop-types';
import './Phonebook.css';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  let firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      const storageContacts = localStorage.getItem('contacts');
      const contactsParse = JSON.parse(storageContacts);
      firstLoad.current = false;

      if (contactsParse) {
        setContacts(contactsParse);
      }
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmit = contactData => {
    if (isExistingContact(contactData.name)) {
      return alert(contactData.name + 'is already in contacts');
    }
    setContacts(prevState => [...prevState, contactData]);
  };

  const isExistingContact = name => {
    const newName = name.toLowerCase();
    return contacts.find(contact => contact.name.toLowerCase() === newName);
  };

  const filtredContacts = () => {
    const filterRequest = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterRequest)
    );
  };

  const removeContact = id => {
    const filtredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filtredContacts);
  };

  return (
    <div className="page-box">
      <h1>Phonebook</h1>
      <ContactForm formSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleInputChange={handleInputFilterChange} />
      <ContactList
        filtredContacts={filtredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};

Phonebook.propTypes = {
  data: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
  id: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};

export default Phonebook;

//  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'id-5', name: 'Ashley Coule', number: '455-82-53' },
//     { id: 'id-6', name: 'Victor Huho', number: '243-19-84' },
//     { id: 'id-7', name: 'Eddie Vader', number: '635-11-18' },
//     { id: 'id-8', name: 'Kurt Cobain', number: '612-24-77' },
