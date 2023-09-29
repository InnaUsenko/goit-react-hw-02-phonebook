import React, { Component } from 'react';
class ContactFilter extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <h2>Find contacts by name</h2>
        <input type="text" name="filter" required />
        <ul>
          {this.props.contacts.map(elem => {
            return (
              <li key={elem.id}>
                {elem.name}: {elem.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ContactFilter;
