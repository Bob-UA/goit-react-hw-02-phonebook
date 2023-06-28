import { Component } from 'react';
import css from './App.module.css';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactsList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = data => {
    this.state.contacts.push(data);
    console.log(this.state.contacts);
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }))
    
  }

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.container}>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;