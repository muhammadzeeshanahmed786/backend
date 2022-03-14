const signin = require('../models/login-schema')
const User = require('../models/user-schema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    signIn: async (req, res) => {
        try {
            let { firstname, password, email } = req.body
            if (!email || !password || !firstname) {
                return res.status(400).send({
                    status: 400,
                    succsess: false,
                    masg: 'All Field Required'
                })
            }
            let checkEmail = await User.findOne({ email: email }).exec()

            if (!checkEmail) {
                return res.status(403).send({
                    status: 403,
                    succsess: false,
                    masg: 'Email Not Exist'
                })
            }

            let pass = checkEmail?.password
            console.log(password, 'password')
            let checkPassword = await bcrypt.compare(password, pass)
            console.log(checkPassword, 'check')

            if (!checkPassword) {
                return res.status(404).send({
                    status: 404,
                    succsess: false,
                    masg: 'Wrong Password'
                })
            }

            if (checkEmail) {
                let token = jwt.sign({
                    email: checkEmail,
                    password: password,
                    firstname: firstname,
                    date: new Date()
                }, "this is token", { expiresIn: '24hr' })
                console.log(token, 'tokennnnnn')
            }

            return res.status(200).send({
                status: 200,
                succsess: 'true',
                masg: 'Success',
            })
        } catch (e) {
            console.log(e, 'err')
            return res.status(400).send({
                status: 400,
                succsess: 'false',
                masg: 'Serve Error',
            })
        }
    }
}





