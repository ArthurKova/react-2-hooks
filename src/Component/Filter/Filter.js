import React from 'react';
import './Filter.css';
import propTypes from 'prop-types';

const Filter = ({ filter, handleInputChange }) => {
  return (
    <label className="page-filter">
      Find contacts by name
      <input
        className="page-filter__input"
        type="text"
        name="filter"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleInputChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
};

export default Filter;
