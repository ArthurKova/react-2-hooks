import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.css';

const ContactForm = ({ formSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };
  const inputReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit({ name, number, id: nanoid() });
    inputReset();
  };

  return (
    <form className="phonebook-form" onSubmit={handleSubmit}>
      <label className="phonebook-form__label">
        Name
        <input
          className="phonebook-form__input"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]/\+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          placeholder="Your name"
        />
      </label>
      <label className="phonebook-form__label">
        Tel
        <input
          className="phonebook-form__input phonebook-form__input-tel"
          type="tel"
          name="number"
          // pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
          placeholder="Your telephone number"
        />
      </label>
      <button type="submit" className="phonebook-form__button">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
