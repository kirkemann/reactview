var React = require('react');
var DefaultLayout = require('../layouts/default')


function Login(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1>Login</h1>
        <form className="form-group" method='post' action='/login'>
          <input type="email" className="form-control my-3" id="exampleFormControlInput1" placeholder='Email' required />  
          <input type='password' className="form-control my-3" id="exampleFormControlInput1" name='password' placeholder='Password' required />
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