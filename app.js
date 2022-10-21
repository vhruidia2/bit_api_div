const express = require("express")

const app = express()
const port = 5000


app.get('/api', (req, res) => {

    return res.status(200).json({message: "Bienvenido al Api :)"})

})


app.get('/division/:num1/:num2', (req, res) => {

    if( parseInt(req.params.num1)===0 || parseInt(req.params.num2)===0){
    
        return res.status(400).json({message:"No se puede dividir entre 0"})
    } else {
        let result= parseInt(req.params.num1) / parseInt(req.params.num2) 
    
        console.log(req.params)

    return res.status(200).json({result: result})
    
    }
})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))