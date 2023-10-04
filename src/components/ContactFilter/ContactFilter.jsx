import React, { Component } from 'react';
class ContactFilter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <br />
        <input
          id="filter"
          type="text"
          name="filter"
          onChange={this.props.handleFiltering}
          required
        />
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
