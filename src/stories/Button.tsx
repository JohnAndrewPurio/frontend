import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className='ellty-button'
      {...props}
    >
      {label}
    </button>
  );
};
