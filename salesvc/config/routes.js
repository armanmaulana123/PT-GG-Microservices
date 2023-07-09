const express = require('express')
const apiRouter = express.Router()
const cors = require('cors')
const controller = require('../app/controllers')
const db = require('./database')
const mongoose = require('mongoose')
const multer = require('multer');
const path = require('path');

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const dirFotoProduk = path.join(__dirname, "../uploads/foto_produk")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, dirFotoProduk)
    },
  
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
})

apiRouter.use(express.json())
apiRouter.use(cors())

apiRouter.get('/produk', controller.produkController.listProduk)
apiRouter.post('/produk', multer({storage:storage}).single("foto_produk"),controller.produkController.createProduk)
apiRouter.put('/produk/:id', controller.produkController.updateProduk)
apiRouter.delete('/produk/:id', controller.produkController.deleteProduk)
apiRouter.get('/produk/:id', controller.produkController.showProduk)

apiRouter.get('/pelanggan', controller.pelangganController.listPelanggan)
apiRouter.post('/pelanggan', controller.pelangganController.createPelanggan)
apiRouter.put('/pelanggan/:id', controller.pelangganController.updatePelanggan)
apiRouter.delete('/pelanggan/:id', controller.pelangganController.deletePelanggan)
apiRouter.get('/pelanggan/:id', controller.pelangganController.showPelanggan)

apiRouter.get('/penjualan', controller.penjualanController.listPenjualan)
apiRouter.get('/penjualan/:id', controller.penjualanController.showDetail)
apiRouter.post('/penjualan', controller.penjualanController.createPenjualan)

apiRouter.use(controller.onLost);
apiRouter.use(controller.onError);

module.exports = apiRouter