import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Register = () => {
  const [err, setErr] = useState('');
  const [val, setVal] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'test'
    };
    const data = { username: val };
    try {
      const res = await axios
        .post('/api/register', data, { headers });
      setErr('success!');

    } catch (er) {
      setErr('failed');
      console.error(er);
    }
    console.log('ayy');
  };
  return (
    <div className='register-layout'>

      <form onSubmit={handleSubmit} className='form-reg'>
        <input
          placeholder='username'
          value={val}
          style={{
            zIndex:1
          }}
          onChange={e =>
            setVal(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Register!
  </button>
        {err}!!
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