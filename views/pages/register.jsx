var React = require('react');
var DefaultLayout = require('../layouts/default')


function Register(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1 className="text-center">Register</h1>
        <form method='post' action='/register'>
            <input name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />  
            <input type='password' name='password' placeholder='Password' required />
            <input type='submit' />  
        </form>
        <a href='/login'>Login</a>
        <br/>
        <a href='/'>Main</a>
    </div>

</DefaultLayout>
  );
}

module.exports = Register;