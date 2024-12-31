const { signupSchema } = require('../middlewares/validator');
const User = require('../models/userModel');
const { doHash } = require('../utils/hashing');
exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const {error,value} = signupSchema.validate(req.body);

        if (error) {
            return res.status(401).json({ message: error.details[0].message });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ message: 'User already exists' });
        }

        const hashedPassword = await doHash(password,12);

        const newUser = new User({
            email,
            password: hashedPassword
        });
        const result = await newUser.save();
        result.password = undefined;
        res.status(201).json({ message: 'User created', user});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};