import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// import bodyParser from "body-parser"
var bodyParser = require('body-parser')
import helmet from "helmet"
import morgan from "morgan"
/* route imports */

/* Configurations */
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extented: false }))
app.use(cors())

/* Routes import */
import projectRoutes from "./routes/projectRoutes"
import taskRoutes from "./routes/taskRoutes"
import searchRoutes from "./routes/searchRoutes"
import userRoutes from "./routes/userRoutes"
import teamRouter from "./routes/teamRoutes"
app.get('/', (req, res) => {
     res.send("This is home route")
})
/* Routes */
app.use('/projects', projectRoutes)
app.use('/tasks', taskRoutes)
app.use('/search', searchRoutes)
app.use('/users', userRoutes)
app.use('/teams', teamRouter)

const port = Number(process.env.PORT) || 3000
app.listen(port, "0.0.0.0", () => {
     console.log(`Server is running on port ${port}`)
})