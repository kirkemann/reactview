var React = require('react');
var DefaultLayout = require('../layouts/default')


function Profil(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1 className="text-center">Ret profil</h1>
        <form className="form-group text-center" method='post' action='/profil'>
            <input name='name' defaultValue={props.name} required />
            <input  type='email' defaultValue={props.email} required /> 
            <input type='text' name='id' required defaultValue={props.user.id} readOnly />
            <input type='submit' />  
        </form>

        <div className="text-center">
          <a className="btn btn-danger btn-lg ml-3 my-3" href='/login'>Login</a>

          <a className="btn btn-danger btn-lg ml-3 my-3" href='/'>Main</a>
        </div>
    </div>

</DefaultLayout>
  );
}

module.exports = Profil;