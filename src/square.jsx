import React from 'react';
import PropTypes from 'prop-types';

function Square(props) {
  const { value, onClick } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Square;
