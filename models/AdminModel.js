import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    UserName: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
})

const Admin = mongoose.model("Admin", adminSchema)

export default Admin