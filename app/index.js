const express = require('express')
let app = express()

const port = process.env.port || 3000

app.listen(port, () =>{
     console.log('Server initialiazed on port ' + port) 
})