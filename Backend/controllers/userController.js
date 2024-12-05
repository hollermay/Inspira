const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
async function signup(req, res){
    try{
    const {email, password} = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    await User.create({email, password: hashedPass});




    res.sendStatus(200);
    console.log('User created');
    } catch{
        res.sendStatus(400);
        console.log('Error creating user');
    }


}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request body:", req.body);

        if (!email || !password) {
            console.log("Missing email or password");
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        console.log("Token generated:", token);

        res.status(200).json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

function logout(req, res){
    res.sendStatus(200);
    console.log('User logged out');

}

function checkAuth(req, res, next){
    const token = req.cookies.Authorization;
    if(!token) return res.status(401).send('Unauthorized');
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.status(403).send('Forbidden');
        req.user = user;
        next();
    });

    res.sendStatus(200);
}





module.exports = {
    signup,
    login,
    logout,
    checkAuth
}
