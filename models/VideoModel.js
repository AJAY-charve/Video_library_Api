import mongoose from "mongoose";

const VideoSchmea = new mongoose.Schema({
    VideoId: {
        type: String,
        require: true
    },
    Title: {
        type: String,
        require: true
    },
    Likes: {
        type: String,
        require: true
    },
    Dislikes: {
        type: String,
        require: true
    },
    Views: {
        type: String,
        require: true
    },
    Url: {
        type: String,
        require: true
    },
    Comments: {
        type: String,
        require: true
    }

})

const Video = mongoose.model("Video", VideoSchmea)

export default Video