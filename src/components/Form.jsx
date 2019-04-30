import React from 'react';
import PropTypes from 'prop-types';
import '../scss/form.scss';

/*
  Recieves function for summarizing input data/etc.
*/

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>first value</p>
    <input type="text" placeholder="Enter your value" />
    <p>second value</p>
    <input type="text" placeholder="Enter your value" />
    <button type="submit">sum up</button>
    <h3>Previous results</h3>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
