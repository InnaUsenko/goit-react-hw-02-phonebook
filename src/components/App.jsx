import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [],
    filter: [],
  };

  addContact = event => {
    event.preventDefault();
    const contacts = this.state.contacts;
    const newName = event.currentTarget.elements.name.value;
    const newContact = {
      id: nanoid(),
      name: newName,
      number: event.currentTarget.elements.number.value,
    };
    const names = contacts.map(elem => elem.name.toLowerCase());
    if (names.includes(newName.toLowerCase())) {
      window.alert('The name ' + newName + ' already exists');
      return;
    }
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

  render() {
    return (
      <div
        style={{
          width: 400,
          marginLeft: '8px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactList handleSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter
          handleFiltering={this.findContact}
          contacts={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
