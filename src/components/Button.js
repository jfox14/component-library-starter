import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, size, label, onClick }) => {

   const typeClassMap =
   {
     primary: 'button--primary',
     secondary:'button--secondary'
   }

   const sizeClassMap =
   {
     small: 'button--small',
     large:'button--large'
   }

   const dynamicallyGenertedClasses=['button', typeClassMap[type], sizeClassMap[size]].join(' ')


  return (
    <button
      type="button"
      onClick={onClick}
      className={dynamicallyGenertedClasses}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'large',
  onClick: undefined,
};
