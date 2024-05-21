import express from "express"
import { AddVideo, DeleteVideo, EditVideo, GetVideoById, GetVideos } from "../controllers/Video.Controller.js"


const router = express.Router()

router.get("/getvideo", GetVideos)

router.post("/addvideo", AddVideo)

router.get("/videos/:id", GetVideoById)

router.put("/editvideo/:id", EditVideo)

router.delete('/deletevideo/:id', DeleteVideo)

export default router