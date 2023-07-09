const dbConfig = require('../../config/database')
const mongoose = require('mongoose')

module.exports = {
    mongoose,
    url: dbConfig.url,
    produk: require('./produkModel')(mongoose),
    pelanggan: require('./pelangganModel')(mongoose),
    penjualan: require('./penjualanModel')(mongoose),
    detailPenjualan: require('./detailPenjualanModel')(mongoose)
}