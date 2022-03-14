const Products = require('../models/products')

module.exports = {
    getProducts: async (req, res, next) => {
        try {
         let pro= await  Products.find()
            .then((s)=>{
                console.log(s,'s')
            })
            .catch((e)=>{
                console.log(e,'ee')
            })

            return res.status(200).json({
                message:'sucees',
                data:pro
            })
            
                

        } catch (e) {
            console.log(e, 'e')
            return res.status(400).json({
                message:'false',
                data:pro
            })
        }

    }
}