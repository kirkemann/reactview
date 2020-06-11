var React = require('react');
var DefaultLayout = require('../layouts/default')


function Login(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1>Login</h1>
        <form className="form-group" method='post' action='/login'>
          <input type='email' name='email' placeholder='Email' required />  
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' />  
        </form>
        <a href='/register'>Register</a>
        <br/>
        <a href='/'>Main</a>
    </div>

</DefaultLayout>
  );
}

module.exports = Login;