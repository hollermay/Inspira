const bcrypt = require("bcryptjs");
const User = require("../models/user");

async function signup(req, res){
    try{
    const {email, password} = req.body;

    const hashedPass = await bcrypt.hash('holler', 10);

    await User.create({email, password: hashedPass});




    res.sendStatus(200);
    console.log('User created');
    } catch{
        res.sendStatus(400);
        console.log('Error creating user');
    }


}

function login(req, res){
    const {email, password} = req.body;

    const user = User
    .findOne({email})
    .then(user => {
        if(!user){
            res.sendStatus(404);
            console.log('User not found');
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err){
                    res.sendStatus(500);
                    console.log('Error comparing passwords');
                } else if(result){
                    res.sendStatus(200);
                    console.log('User logged in');
                } else {
                    res.sendStatus(401);
                    console.log('Incorrect password');
                }
            });
        }
    })
    .catch(err => {
        res.sendStatus(500);
        console.log('Error finding user');
    });
}

function logout(req, res){
    res.sendStatus(200);
    console.log('User logged out');

}




module.exports = {
    signup,
    login,
    logout
}
