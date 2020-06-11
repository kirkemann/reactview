var React = require('react');
var DefaultLayout = require('../layouts/default');

function Home(props) {
  return (


    <DefaultLayout>
        <div>
            <h1 className="text-primary text-center">{props.sidenstitle}</h1>
            {
                props.userId ?
                        <div>
                            <h1 >Home</h1>
                            
                        </div>
                    : 
                        <div>
                            <div>
                                <h5 className="text-center">Name: {props.name}</h5>
                                <h5 className="text-center">Email: {props.email}</h5>
                            </div>

                            
                            <div>
                                <a class="btn btn-success btn-lg ml-3 text-center" href='/'>Main</a>
                                <a class="btn btn-success btn-lg ml-3text-center" href='./profil'>Ret Profil</a>
                            </div>
                            <img className="rounded mx-auto d-block" src="/images/aktiviteter-15.jpg" alt="tog"/>
                        </div>  
            }
        </div>

    </DefaultLayout>
  );
}

module.exports = Home;