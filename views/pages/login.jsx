var React = require('react');
var DefaultLayout = require('../layouts/default')


function Login(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1 className="text-center">Login</h1>
        <form className="text-center" method='post' action='/login'>
          <input className="mx-3" type='email' name='email' placeholder='Email' required />  
          <input className="mx-3" type='password' name='password' placeholder='Password' required />
          <input className="mx-3" type='submit' />  
        </form>
        <a className="btn btn-danger btn-lg ml-3 my-3 text-center" href='/register'>Register</a>
        <a className="btn btn-warning btn-lg ml-3 my-3 text-center" href='/'>Main</a>
    </div>

</DefaultLayout>
  );
}

module.exports = Login;