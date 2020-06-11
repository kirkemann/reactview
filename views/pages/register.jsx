var React = require('react');
var DefaultLayout = require('../layouts/default')


function Register(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1 className="text-warning text-center">Register</h1>
        <form className="text-center" method='post' action='/register'>
            <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Dit Navn" required />
            <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="name@example.com" required />  
            <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Password" required />
            <input className="ml-3" type='submit' />  
        </form>
        <div className="row">
          <div className="col-12 text-center">
            <a className="ml-3" href='/login'>Login</a>
            
            <a href='/'>Main</a>
          </div>
        </div>
    </div>

</DefaultLayout>
  );
}

module.exports = Register;