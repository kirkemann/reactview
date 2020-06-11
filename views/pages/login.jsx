var React = require('react');
var DefaultLayout = require('../layouts/default')


function Login(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1>Login</h1>
        <form method='post' action='/login'>
          <input className="mx-3" type='email' name='email' placeholder='Email' required />  
          <input className="mx-3" type='password' name='password' placeholder='Password' required />
          <input className="mx-3" type='submit' />  
        </form>
        <a className="btn btn-danger btn-lg ml-3 my-3" href='/register'>Register</a>
        <br/>
        <a className="btn btn-warning btn-lg ml-3 my-3" href='/'>Main</a>
    </div>

</DefaultLayout>
  );
}

module.exports = Login;