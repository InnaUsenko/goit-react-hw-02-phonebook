import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div
        style={{
          width: 400,
          marginLeft: '8px',
        }}
      >
        <ContactList />
        <ContactFilter />
      </div>
    );
  }
}
export default App;
