export const sendToken = (res, user, statusCode, message) => {


    const token = user.getJWTToken();
    const options= {

        httpOnly:true,
        
    };

    const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        tasks: user.tasks,
        verified: user.verified,

    }

    res
    .status(statusCode)
    .cookie("token",token,options)
    .json({ success: true, message, user: userData});
};


