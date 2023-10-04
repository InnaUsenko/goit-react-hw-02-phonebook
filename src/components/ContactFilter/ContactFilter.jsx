import React, { Component } from 'react';
import css from './ContactFilter.module.css';
class ContactFilter extends Component {
  render() {
    return (
      <div className={css.form}>
        <label htmlFor="filter">Find contacts by name</label>
        <br />
        <input
          id="filter"
          className={css.inp}
          type="text"
          name="filter"
          onChange={this.props.handleFiltering}
          required
        />
        <ul>
          {this.props.contacts.map(elem => {
            return (
              <li key={elem.id}>
                <span style={{ display: 'line-block', marginRight: 16 }}>
                  {elem.name}: {elem.number}
                </span>
                <button
                  id={elem.id}
                  onClick={this.props.handleDelete}
                  className={css.btn}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ContactFilter;
