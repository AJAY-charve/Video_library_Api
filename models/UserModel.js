import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UserId: {
        type: String,
        require: true,
        unique: true
    },
    UserName: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    Mobile: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model("User", userSchema)

export default User