import react from 'react';
import { nanoid } from 'nanoid';


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({id = nanoid(), name, number}) => (
        <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;