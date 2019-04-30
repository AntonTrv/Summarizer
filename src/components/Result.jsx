import React from 'react';
import PropTypes from 'prop-types';
import '../scss/result.scss';

/*
  Recieves data to display.
  Props made for !!Numbers!! Customisable!
*/
const Result = ({ data }) => (
  <div className="result">{data}</div>
);

Result.propTypes = {
  data: PropTypes.number,
};

export default Result;
