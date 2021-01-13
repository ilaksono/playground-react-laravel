import {useEffect} from 'react';
import axios from 'axios';
const UsersView = () => {

  useEffect(() => {
    console.log('load')
    axios.get('/api/users')
    .then((res) => console.log(res, 'here'))
    .catch(er => console.log(er, 'here'))
    axios.get('/api/userss')
      .then((res) => console.log(res, 'ho'))
      .catch(er => console.log(er, 'ho'))
  }, [])
  return (
    <div>
      Hi
    </div>
  )
}
export default UsersView;