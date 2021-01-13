import {useEffect} from 'react';
import axios from 'axios';
const UsersView = () => {

  useEffect(() => {
    axios.get('/api/users')
    .then((res) => console.log(JSON.parse(res.data)))
  }, [])
  return (
    <div>
      Hi
    </div>
  )
}
export default UsersView;