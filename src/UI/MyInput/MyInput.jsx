import React, { useState } from 'react';

const MyInput = ({placeholder, ref }) => {



  return (
    <input
      ref={ref}
      type="text"
      className="create__form-input input"
      placeholder={placeholder}
    />
  )
}

export default MyInput