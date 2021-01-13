import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import UsersView from './UsersView';

export default function Index() {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact>
            <div className="card-header">Example Component</div>
            <Link to='/register'>
              <button>go to register</button>
            </Link>
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/users'>
            <UsersView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


if (document.getElementById('root')) {
  ReactDOM.render(<Index />, document.getElementById('root'));
}
