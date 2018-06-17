const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/user') //loads mongoose collection file, creating the model class
require('./services/passport')

const keys = require('./src/config/keys')


mongoose.connect(keys.mongoURI)

const app = express()

//20 Days Expiry
//Encrypt cookie was keys
app.use(
    cookieSession({
        name: 'session',
        maxAge: 20 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)


//middleware , app.use()
app.use(passport.initialize()) //Tell passport to make sure of cookies to handle authentication
app.use(passport.session())

require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000

app.listen(PORT)


