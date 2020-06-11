const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')


var FileStore = require('session-file-store')(session);
var fileStoreOptions = {};


const TWO_HOURS = 1000 * 60 * 60 * 2

const {
    PORT = 3112,
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SES_SECRET = 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === 'production'


/* TODO: DB */
const users = [
    { id: 1, name: 'Alex', email: 'alex@gmail.com', password: 'secret' },
    { id: 2, name: 'Frank', email: 'frank@gmail.com', password: 'secret' },
    { id: 3, name: 'Kathrine', email: 'Kathrine@gmail.com', password: 'secret' }

]

const app = express()

/* https://github.com/reactjs/express-react-views */
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));


app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('trust proxy', 1);

app.use(session({
    name: SESS_NAME,
    store: new FileStore(fileStoreOptions),
    resave: false,
    saveUninitialized: false,
    secret: SES_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        samSite: true,
        secure: IN_PROD
    }
}))

const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

app.use((req, res, next) => {
    const { userId } = req.session
    if (userId) {
        res.locals.user = users.find(
            user => user.id === userId
            )
    }
    next()
})

app.get('/', (req, res) => {

   const  { userId } = req.session

   console.log(userId);
    
    // res.send(`
    //     <h1>Velkommen!</h1>
    //     ${userId ? `
    //         <a href='/home'>Home</a>
    //         <form method='post' action='/logout'>
    //             <button>Logout</button>
    //         </form>
    //     ` : `
    //         <a href='/login'>Login</a>
    //         <a href='/register'>Register</a>
    //     `}

    // `)

    res.render('index', { userId: userId, sidenstitle: "Velkommen til siden" })
})

app.get('/home', redirectLogin, (req, res) => {
const { user } = res.locals

    // res.send(`
    //     <h1>Home</h1>
    //     <a href='/'>Main</a>
    //     <ul>
    //         <li>Name: ${user.name}</li>
    //         <li>Email: ${user.email}</li>
    //     </ul>
    // `)

    res.render('pages/home', { name: user.name, email: user.email, sidenstitle: "Velkommen her du" })
})


app.get('/profil', redirectLogin, (req, res) => {
    const { user } = res.locals

    res.render('pages/profil', { name: user.name, email: user.email, userId: user.id, sidenstitle: "Ret din profil her" })
})

app.get('/login', redirectHome, (req, res) => {

    // res.send(`
    //     <h1>Login</h1>
    //     <form method='post' action='/login'>
    //       <input type='email' name='email' placeholder='Email' required />  
    //       <input type='password' name='password' placeholder='Password' required />
    //       <input type='submit' />  
    //     </form>
    //     <a href='/register'>Register</a>
    // `)
    res.render('pages/login', { sidenstitle: "Login her" })
})

app.get('/register', redirectHome, (req, res) => {
    // res.send(`
    //     <h1>Register</h1>
    //     <form method='post' action='/register'>
    //         <input name='name' placeholder='Name' required />
    //         <input type='email' name='email' placeholder='Email' required />  
    //         <input type='password' name='password' placeholder='Password' required />
    //         <input type='submit' />  
    //     </form>
    //     <a href='/login'>Login</a>
    // `)
   
    res.render('pages/register', { sidenstitle: "Register dig her" })
})
app.post('/login', redirectHome, (req, res) => {
    const { email, password } = req.body

    if (email && password ) {/* TODO: Validation */
        const user = users.find(user => user.email === email && user.password === password) /* TODO: hash */
        
        if (user) {
            req.session.userId = user.id
            return res.redirect('/home')
        }
    }

    res.redirect('/login')
})

app.post('/register', redirectHome, (req, res) => {
    const { name, email, password } = req.body
   
    if (name && email && password) { /* TODO: Validation */
        const exists = users.some(
            user => user.email === email
        )

        if (!exists) {
            const user = {
                id: users.length + 1,
                name,
                email,
                password /* TODO: Hash */
            }

            users.push(user)

            req.session.userId = user.id

            return res.redirect('/home')
        }
    }
    res.redirect('/register') /* TODO: QS errors */
})

app.post('/profil', redirectHome, (req, res) => {
    const { name, email } = req.body
   
    if (email && name ) {
        const user = users.find(user => user.id === user.id ) 
        
        if (user) {
            req.session.userId = user.id
            return res.redirect('/profil')
        }
    }
    res.redirect('/profil') /* TODO: QS errors */
})

app.post('/logout', redirectLogin, (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home')
        }

        res.clearCookie(SESS_NAME)
        res.redirect('/login')
    })
})

app.listen(PORT, () => console.log(
    'Server køre på port ' + PORT
))