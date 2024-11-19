import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = 3000
const app = express()


app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})