import React from 'react';
import Result from './Result';
import '../scss/resultList.scss';
import PropTypes from 'prop-types';

/*
  Recieves an array to display each element according to script,
  passes data
*/
const ResultList = ({ data }) => (
  <div className="result-list">
    {data.map((el, i) =>
    <Result key={i} data={el} />
)}
  </div>
);

ResultList.propTypes = {
  data: PropTypes.array
}

export default ResultList;
