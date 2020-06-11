var React = require('react');
var DefaultLayout = require('../layouts/default');

function Home(props) {
  return (


    <DefaultLayout>
        <div>
            <h1>{props.sidenstitle}</h1>
            {
                props.userId ?
                        <div>
                            <h1 >Home</h1>
                            
                        </div>
                    : 
                        <div>
                            <ul>
                                <li>Name: {props.name}</li>
                                <li>Email: {props.email}</li>
                            </ul>

                            
                            <div>
                                <a href='/'>Main</a>
                                <br/>
                                <a href='./profil'>Ret Profil</a>
                            </div>
                            <img src="/images/aktiviteter-15.jpg" alt="tog"/>
                        </div>  
            }
        </div>

    </DefaultLayout>
  );
}

module.exports = Home;