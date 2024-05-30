import Video from "../models/VideoModel.js"

export const GetVideos = async (req, res) => {
    try {
        const videos = await Video.find();
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
    try {
        const id = req.params.id;

        const video = await Video.findOne({ VideoId: id });

        if (!video) {
            return res.status(404).json({
                success: false,
                message: "Video not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully retrieved video by ID",
            video,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving the video",
            error: error.message,
        });
    }
};


export const EditVideo = async (req, res) => {

    const id = req.params.id;

    const { VideoId, Title, Url, Likes, Dislikes, Views, Comments } = req.body;

    const video = await Video.findOne({ VideoId: id })

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

    const id = req.params.id;

    const video = await Video.findOne({ VideoId: id })

    await video.deleteOne()

    res.status(200).json({
        success: true,
        message: "Video Deleted Successfully",
        video
    })

}