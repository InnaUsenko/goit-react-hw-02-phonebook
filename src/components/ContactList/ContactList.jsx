import React, { Component } from 'react';
class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" name="name" required />
          <br />
          <label htmlFor="number">Number</label>
          <br />
          <input id="number" type="tel" name="number" required />
          <br />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
export default ContactList;
