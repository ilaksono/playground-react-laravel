import React, { Fragment, useState } from 'react';


const Register = () => {
  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log('ayy');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='username'
        value={val}
        onChange={e =>
          setVal(e.target.value)}
      />
      <button type='submit'>
        Register!
  </button>
    </form>
  );
};

export default Register;