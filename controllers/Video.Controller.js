import Video from "../models/VideoModel.js"

export const GetVideos = async (req, res) => {
    try {
        const videos = await Video.find(); // Retrieve all videos from the database
        res.status(200).json({
            success: true,
            message: "Videos retrieved successfully",
            videos: videos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const AddVideo = async (req, res) => {
    const { VideoId, Title, Url, Likes, Dislikes, Views, Comments } = req.body;

    try {
        const video = await Video.create({
            VideoId,
            Title,
            Url,
            Likes,
            Dislikes,
            Views,
            Comments
        });

        res.status(200).json({
            success: true,
            message: "Video Added Successfully",
            video: video
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const GetVideoById = async (req, res) => {

    const id = req.body.params

    const video = await Video.findOne({ id })

    res.status(200).json({
        success: true,
        message: "Successfully Get Video_id from video",
        video
    })
}


export const EditVideo = async (req, res) => {

    const id = req.body.params

    const { VideoId, Title, Url, Likes, Dislikes, Views, Comments } = req.body;

    const video = await Video.findOne({ id })

    video.Title = Title,
        video.VideoId = VideoId,
        video.Url = Url,
        video.Likes = Likes,
        video.Dislikes = Dislikes,
        video.Views = Views,
        video.Comments = Comments
    video.save()


    res.status(200).json({
        success: true,
        message: "Video Updated Successfully",
        video
    })

}


export const DeleteVideo = async (req, res) => {

    const id = req.body.params

    const video = await Video.findOne({ id })

    await video.deleteOne()

    res.status(200).json({
        success: true,
        message: "Video Deleted Successfully",
        video
    })

}