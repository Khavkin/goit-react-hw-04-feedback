import React from 'react';
import PropTypes from 'prop-types';
import { Options } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = [...options];

  return (
    <Options onClick={onLeaveFeedback}>
      {buttons.map(button => (
        <li key={button}>
          <button type="button" name={button}>
            {button}
          </button>
        </li>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
