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

async function login(req, res){
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(400).send('User not found');

        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword) return res.status(400).send('Invalid password');

        const exp = Date.now() + 1000 * 60 * 60 * 24;

        var token = jwt.sign({sub: user._id, exp}, process.env.SECRET);
        if (!token) return res.status(400).send('Token generation failed');

        res.cookie('Authorization', token, {expires: new Date(exp), httpOnly: true, secure: true, sameSite: 'none'});

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Internal server error');
        console.error('Error during login:', error);
    }
}

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
