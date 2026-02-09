import express from 'express' // permite criar servidor e rotas na API
import cors from 'cors' // permite o frontend  acessar a API
import mysql from 'mysql' // permite conectar node a base de dados MySQL
import path from 'path' //para lidar com caminhos de arquivos

const app = express()

// Permite receber JSON no body
app.use(express.json())
app.use(cors())

const port = 5000

// base de dados
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "students"
})

app.listen(port, ()=>{
    console.log('listening')
})