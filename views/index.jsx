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
                        <div>
                            <button type="button" classname="btn btn-primary"><a href='/login'>Login </a></button>
                            <button type="button" classname="btn btn-warning"><a href='/register'>Register </a></button>
                        </div>
                    
            }
        </div>

    </DefaultLayout>
  );
}

module.exports = Index;