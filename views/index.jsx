var React = require('react');
var DefaultLayout = require('./layouts/default');

function Index(props) {
  return (


    <DefaultLayout>
        <div>
            <h1>{props.sidenstitle}</h1>
            {
                props.userId ?
                        <div>
                            <a href='/home'>Home</a>
                            <form method='post' action='/logout'>
                                <button>Logout</button>
                            </form>
                        </div>
                    : 
                        <ul>
                            <li><a href='/login'>Login </a></li>
                            <li><a href='/register'>Register </a></li>
                        </ul>
                    
            }
        </div>

    </DefaultLayout>
  );
}

module.exports = Index;