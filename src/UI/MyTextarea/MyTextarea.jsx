import React, { useState } from 'react';

const MyTextarea = ({ placeholder, ref }) => {




  return (
    <textarea
      ref={ref}
      className="create__form-input input"
      placeholder={placeholder}
    ></textarea>
  );
}

export default MyTextarea;