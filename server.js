// Require modules
require('dotenv').config()
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Vegetable = require('./models/vegetables')

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx') // register the jsx view engine
app.engine('jsx', require('jsx-view-engine').createEngine())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))

/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET
app.get('/vegetables', (req, res) => {
  Vegetable.find({}, (err, foundVegetables) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('vegetables/Index', { 
        vegetables: foundVegetables
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/vegetables/new', (req, res) => {
  res.render('vegetables/New')
})

// DELETE

// UPDATE

// CREATE
app.post('/vegetables', (req, res) => {
  // req.body which contains all of our form Data we will get from the user
  req.body.readyToEat === 'on' ? req.body.readyToEat = true : req.body.readyToEat = false
  Vegetable.create(req.body, (err, createdVegetable) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/vegetables`)
    }
  })
})

// EDIT (not applicable in an api)


// SHOW ---- READ ---- GET
app.get('/vegetables/:id', (req, res) => {
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
    if(err){
     console.error(err)
     res.status(400).send(err)
    } else {
      res.render('vegetables/Show', {
        vegetable: foundVegetable
      })
    }
  })
 })

/* END ROUTES */

// Tell the app to listen on a port
app.listen(3001, () => {
    console.log('Listening on Port 3001')
})