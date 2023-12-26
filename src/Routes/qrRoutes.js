// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../Schema/product');
const QRCode = require('qrcode');


router.get('/',async(req,res)=>{
    const { productId } = req.body;
    try {
        const existingProduct = await Product.find({ id: productId });

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        
        let qr= await QRCode.toDataURL(`http://localhost:3000/items/detail?id=${productId}`);
        res.status(200).json({
            data: qr,
            code: 200,
            message: 'Create QR successfully!',
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
