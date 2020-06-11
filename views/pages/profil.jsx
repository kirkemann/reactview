var React = require('react');
var DefaultLayout = require('../layouts/default')


function Profil(props) {
  return (


    <DefaultLayout title={props.sidenstitle}>
    <div>
    <h1>Ret profil</h1>
        <form className="form-group" method='post' action='/profil'>
            <input name='name' defaultValue={props.name} required />
            <input  type='email' defaultValue={props.email} required /> 
            <input type='text' name='id' required defaultValue={props.user.id} readOnly />
            <input type='submit' />  
        </form>
        <a href='/login'>Login</a>
        <br/>
        <a href='/'>Main</a>
    </div>

</DefaultLayout>
  );
}

module.exports = Profil;