import React, { Component } from 'react';
class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div style={{ border: '1px solid' }}>
          <h2>Name</h2>
          <input type="text" name="name" required />
          <br />
          <h2>Number</h2>
          <input type="tel" name="number" required />
          <br />
          <button>Add contact</button>
        </div>
      </div>
    );
  }
}
export default ContactList;
