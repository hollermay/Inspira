const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
        
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
};

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log("Login request received:", email);

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
        console.log("Token generated successfully");

        res.status(200).json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

exports.logout = (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
};
