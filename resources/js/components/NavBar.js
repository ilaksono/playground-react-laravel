import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import axios from 'axios';
const NavBar = () => {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies["XSRF-TOKEN"])
      console.log(cookies["XSRF-TOKEN"]);
    const headers = [
      {"XSRF-TOKEN": cookies["XSRF-TOKEN"]},
      {'Access-Control-Allow-Origin': true},
    ];
    axios
      .get('/api/user', { headers, mode: 'cors' })
      .then(res => console.log(res))
      .catch(er => console.log(er));
  }, []);


  return (
    <nav style={{
      height: 80,
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      backgroundColor: '#222',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}
      className='nav-container'
    >
      <Link to='/'>
        <div className='nav-item'>
          Home
        </div>
      </Link>
      <Link to='/register'>
        <div className='nav-item'>
          Register
        </div>
      </Link>
      <Link to='/users'>
        <div className='nav-item'>
          Users
        </div>
      </Link>
    </nav>
  );
};
export default NavBar;