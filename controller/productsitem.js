const products = require('../models/products')
module.exports = {
    createProducts: async (req, res, next) => {
        try {
            const preUrl = process.env.NODE_ENV == "dev" ? "http" : "http";
            const imageUrl = `${preUrl}://${req.headers.host}/` + req.file.path;
            console.log(imageUrl, 'imageURL')
            let createProducts = new products({
                title: req.body.title,
                email: req.body.email,
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                imageURL: imageUrl
            })
            createProducts.save();
            res.status(200).json({
                sucsess: true,
                message: 'Products Add '
            })
                

        } catch (e) {
            console.log(e)
        }
    },
    getProducts: async (req, res, next) => {
        try {
            let pro = await products.find({})
            console.log(pro, 'sssss')
               

            return res.status(200).json({
                message: 'sucees',
                data: pro
            })



        } catch (e) {
            console.log(e, 'e')
            return res.status(400).json({
                message: 'false',
            })
        }

    }


}