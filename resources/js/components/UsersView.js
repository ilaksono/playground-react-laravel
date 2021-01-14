import { useEffect, useState } from 'react';
import axios from 'axios';
import StyledTable from './StyledTable';
const UsersView = () => {

  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('load');
    axios.get('/api/users')
      .then((res) => setState(res.data))
      .catch(er => console.log(er, 'here'));
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => console.log(res.data));
    // axios.get('/api/userss')
    //   .then((res) => console.log(res, 'ho, usersss'))
    //   .catch(er => console.log(er, 'ho'))
    axios.get('/api/users/all')
    .then(res => setUsers(res.data.all))
    .catch(er => console.log(er));
  }, []);

  let parsedData = [];

  if (state.length) {
    parsedData = state.map((each) => {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
        key={each.id}
        >
          <div>
            title
          </div>
          <div>
            {each.title}
          </div>


        </div>
      );
    });
  }
  return (
    <div>
      Table:
      <StyledTable data={users}/>
      {parsedData}
    </div>
  );
};
export default UsersView;