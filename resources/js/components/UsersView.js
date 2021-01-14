import {useEffect} from 'react';
import axios from 'axios';
const UsersView = () => {

  useEffect(() => {
    console.log('load')
    axios.get('/api/users')
    .then((res) => console.log(res))
    .catch(er => console.log(er, 'here'))
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => console.log(res.data));
    // axios.get('/api/userss')
    //   .then((res) => console.log(res, 'ho, usersss'))
    //   .catch(er => console.log(er, 'ho'))
  }, [])
  return (
    <div>
      Hi
    </div>
  )
}
export default UsersView;