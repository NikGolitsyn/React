import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;
