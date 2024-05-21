
import Admin from "../models/AdminModel.js"

export const AdminLogin = async (req, res) => {
    const { UserName, Password } = req.body

    const admin = await Admin.findOne({ UserName });

    if (!admin || admin.Password !== Password) {
        return res.status(400).json({
            success: false,
            message: "Invalid UserName or Password",
        });
    }

    try {
        if (admin) {
            return res.status(200).json({
                success: true,
                message: "Admin Login Successfully",
                admin
            })
        }
    } catch (error) {
        console.log("error", error)
    }
}