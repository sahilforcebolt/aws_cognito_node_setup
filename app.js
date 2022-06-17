const express = require('express')
const login = require("./Routes")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
module.exports = function (){
    let app=express()
    let Port=8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    app.listen(Port, () => {
        console.log(`Example app listening on port ${Port}`)
      })
app.use('/api/v1',login)
}

