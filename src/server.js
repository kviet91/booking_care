import bodyParser from "body-parser"
import express from "express"
import viewE from "./config/viewE"
import dotenv from "dotenv"
import initWebRoutes from "./route/web"
import connectDB from "./config/conectDB"

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewE(app)
initWebRoutes(app)
connectDB()

const port = process.env.PORT || 6060

app.listen(port, () => {
    console.log(`server is running ${port}`)
})



