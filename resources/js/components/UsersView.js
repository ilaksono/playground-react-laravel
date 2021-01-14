import { useEffect, useState } from 'react';
import axios from 'axios';
const UsersView = () => {

  const [state, setState] = useState([]);


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
      Hi
      {parsedData}
    </div>
  );
};
export default UsersView;