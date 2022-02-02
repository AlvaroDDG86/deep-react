import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button')
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// this will not work, because function x() {} === function x() {} is false, they are not primitive values (see now useCallback)
export default React.memo(Button);
