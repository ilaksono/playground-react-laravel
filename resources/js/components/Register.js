import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Register = () => {
  const [err, setErr] = useState('');
  const [val, setVal] = useState('');
  const history = useHistory();
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'test',
      'Access-Control-Allow-Origin': true
    };
    const data = { username: val, password: pass };
    try {
      const res = await axios
        .post('/api/register', data, { headers, mode: 'cors' });
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
            zIndex: 1
          }}
          onChange={e =>
            setVal(e.target.value)}
        />
        <input value={pass}
          style={{
            zIndex: 1
          }}
          placeholder='password'
          onChange={e =>
            setPass(e.target.value)}
          type='password'
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