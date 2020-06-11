var React = require('react');
var DefaultLayout = require('../layouts/default')


function Register(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1 className="text-warning text-center">Register</h1>
        <form className="text-center" method='post' action='/register'>
            <input className="ml-3" name='name' placeholder='Name' required />
            <input className="ml-3" type='email' name='email' placeholder='Email' required />  
            <input className="ml-3" type='password' name='password' placeholder='Password' required />
            <input className="ml-3" type='submit' />  
        </form>
        <div className="row">
          <div className="col-sm">
            <a href='/login'>Login</a>
            <br/>
            <a href='/'>Main</a>
          </div>
        </div>
    </div>

</DefaultLayout>
  );
}

module.exports = Register;