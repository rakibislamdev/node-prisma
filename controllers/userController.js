// bring in prisma and cookie
const prisma = require('../prisma/prisma');
const cookieToken = require('../utils/cookieToken');

// User signup
exports.signUp = async (req, res, nex) => {
    try {
        const { name, email, password } = req.body;
        // check
        if (!name || !email || !password) {
            throw new Error('please provide all fields');
        }

        // Insert new 
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        // send user a token
        cookieToken(use,res);

    } catch (error) {
        throw new Error(error);
    }
}