import React from 'react';
import './ContactList.css';
import propTypes from 'prop-types';

const ContactList = ({ filtredContacts, removeContact }) => {
  return (
    <ul className="page__list">
      {filtredContacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={id} className="page__item">
            <p>
              {name}: {number}
            </p>
            <button onClick={() => removeContact(id)} className="page__button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContacts: propTypes.array.isRequired,
  // removeContact: propTypes.func.isRequired,
};

export default ContactList;

// const ContactList = ({ filtredContacts, removeContact }) => {
//   return (
//     <ul className="page__list">
//       {filtredContacts.map(contact => (
//         <li key={contact.id} className="page__item">
//           <p>
//             {contact.name}: {contact.number}
//           </p>
//           <button
//             onClick={() => removeContact(contact.id)}
//             className="page__button"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };
