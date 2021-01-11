import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';

export default function Index() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}


if (document.getElementById('root')) {
  ReactDOM.render(<Index />, document.getElementById('root'));
}
