import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: [],
  };

  addContact = contact => {
    const contacts = this.state.contacts;
    const names = contacts.map(elem => elem.name.toLowerCase());
    if (names.includes(contact.name.toLowerCase())) {
      window.alert('The name ' + contact.name + ' already exists');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    contacts.push(newContact);
    this.setState({ contacts: contacts, filter: contacts });
  };

  findContact = event => {
    const name = event.currentTarget.value;
    const contacts = this.state.contacts;
    if (name.length === 0) {
      this.setState({
        filter: this.state.contacts,
      });
      return;
    }
    let fltr = contacts.filter(el => {
      const curName = el.name;
      let temp = curName.substr(0, name.length);
      return name.toLowerCase() === temp.toLowerCase();
    });
    this.setState({
      filter: fltr,
    });
  };

  deleteContact = event => {
    const id = event.currentTarget.id;
    const contacts = this.state.contacts.filter(elem => elem.id !== id);
    this.setState({
      contacts: contacts,
      filter: contacts,
    });
  };

  render() {
    return (
      <div
        style={{
          width: 400,
          marginLeft: '8px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter handleFiltering={this.findContact} />
        <ContactList
          contacts={this.state.filter}
          handleDelete={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
