import User from "../models/UserModel.js"


export const Register = async (req, res) => {

    const { UserId, UserName, Password, Mobile, Email } = req.body

    let user = await User.findOne({ Email })
    if (user) {
        return res.status(400).json({
            success: false,
            message: "Email is Alredy Exist",
        })
    }

    try {
        user = await User.create({
            UserId,
            UserName,
            Mobile,
            Password,
            Email
        })
        res.status(200).json({
            success: true,
            message: "User Created Successfully",
            user
        })
    } catch (error) {
        console.log(error)
    }

}


export const Login = async (req, res) => {
    const { UserId, Password } = req.body;

    try {

        const user = await User.findOne({ UserId });

        if (!user || user.Password !== Password) {
            return res.status(400).json({
                success: false,
                message: "Invalid UserId or Password",

            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully Logged In",
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const Logout = (req, res) => {
    res.json({
        success: true,
        message: "Logout Successfully"
    })
}