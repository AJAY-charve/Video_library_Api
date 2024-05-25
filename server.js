import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoute from "./routes/UserRoutes.js"
import VideoRoute from "./routes/VideoRoutes.js"
import AdminRoute from "./routes/AdminRoutes.js"
import { config } from "dotenv"

config({
    path: "./data/config.env"
})

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}));



mongoose.connect(process.env.MONGO_URL, {
    dbName: "Video_Library"
}).then(() => {
    console.log("MongoDB Connected Successfully")
})

//api
app.use("/api/users", userRoute)
app.use("/api/video", VideoRoute)
app.use("/api/admin", AdminRoute)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server Started on port number ${port}`)
})