import { Link } from 'react-router-dom';

const NavBar = () => {


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