const User = require('../models/user-schema')
const bcrypt = require('bcrypt');
module.exports = {
    createUser: async (req, res) => {
        try {
            console.log(req.body)
            let { phoneNumber, password, email, firstname } = req.body
            if (!email || !phoneNumber || !password || !firstname) {
                return res.status(400).send({
                    status: 400,
                    succsess: false,
                    masg: 'All Field Required'
                })
            }
            let salt = await bcrypt.genSalt(10)
            let secPassword = await bcrypt.hash(password, salt)

            let checkEmail = await User.findOne({ email: email }).exec()
            if (checkEmail) {
                return res.status(400).send({
                    status: 400,
                    succsess: false,
                    masg: 'Email Already Exist'
                })
            }

            let create = new User({
                firstname: firstname,
                phoneNumber: phoneNumber,
                password: secPassword,
                email: email,
                createdat: new Date(new Date().getTime()+ 4*60*60*1000)
            })
            await create.save()

            return res.status(200).send({
                status: 200,
                succsess: 'true',
                masg: 'user create'
            })
        }


        catch (e) {
            console.log('err', e)
            return res.status(400).send({
                status: 400,
                succsess: 'false',
                masg: 'Serve Error',
            })
        }

    }
}