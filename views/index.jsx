var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (


    <DefaultLayout>
        <div>
            <h1 className="text-center text-danger">{props.sidenstitle}</h1>
            {
                props.userId ?
                        <div className="text-center">
                            <a href='/home'>Home</a>
                            <form method='post' action='/logout'>
                                <button>Logout</button>
                            </form>
                        </div>
                    : 
                        <div className="text-center">
                            <a className="btn btn-success btn-lg ml-3" href='/login'>Login </a>
                            <a className="btn btn-primary btn-lg ml-3"href='/register'>Register </a>
                        </div>
                    
            }
        </div>

    </DefaultLayout>
  );
}

module.exports = Index;