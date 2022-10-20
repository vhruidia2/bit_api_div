const express = require("express")

const app = express()
const port = 5000

//rutas
app.get('/api', (req, res) => {

    return res.status(200).json({message: "Bienvenido al Api :)"})

})

//suma
app.get('/division/:num1/:num2', (req, res) => {

    let result = parseInt(req.params.num1) / parseInt(req.params.num2) //NaN
    console.log(req.params)

    return res.status(200).json({result: result})

})

app.get('/division', (req, res) => {
    // /suma?num1=25&&num2=25
    let result = parseInt(req.query.num1) + parseInt(req.query.num2) //NaN
    console.log(req.query)

    return res.status(200).json({result: result})

})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))