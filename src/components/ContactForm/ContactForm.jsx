import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.props.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" name="name" required />
          <br />
          <label htmlFor="number">Number</label>
          <br />
          <input id="number" type="tel" name="number" required />
          <br />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
