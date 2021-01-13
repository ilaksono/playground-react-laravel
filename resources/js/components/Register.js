import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Register = () => {
  const [val, setVal] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('ayy');
  };
  return (
    <div className='register-layout'>

      <form onSubmit={handleSubmit} className='form-reg'>
        <input
          placeholder='username'
          value={val}
          onChange={e =>
            setVal(e.target.value)}
        />
        <button type='submit'>
          Register!
  </button>
        <button onClick={() => history.push('/')}>
          go back
  </button>
        <Button color="primary">
          Im bootstrap
  </Button>

      </form>
    </div>
  );
};

export default Register;