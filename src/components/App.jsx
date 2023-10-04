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
    filter: [],
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

  findContact = event => {
    const name = event.currentTarget.value;
    const contacts = this.state.contacts;
    if (name.length < 1) {
      this.setState({
        filter: [],
      });
      return;
    }
    let fltr = contacts.filter(el => {
      const curName = el.name;
      let temp = curName.substr(0, name.length);
      console.log(name + ' ' + temp);
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
        <ContactList handleSubmit={this.addContact} />
        <ContactFilter
          handleFiltering={this.findContact}
          contacts={this.state.filter}
        />
      </div>
    );
  }
}
export default App;
