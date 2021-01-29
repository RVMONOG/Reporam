const express = require('express')
const app = express()

app.get('*', (request, response) =>{
    response.send({ message: 'Hola Mundo!'})
})

app.listen(3000, () => console.log('Server Active listen port 3000'))
