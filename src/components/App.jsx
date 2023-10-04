import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    const contacts = this.state.contacts;
    const newContact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };
    contacts.push(newContact);
    this.setState({ contacts });
  };

  render() {
    return (
      <div
        style={{
          width: 400,
          marginLeft: '8px',
        }}
      >
        <ContactList handleSubmit={this.addContact} />
        <ContactFilter contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
