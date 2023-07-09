const {penjualan} = require('../models')

module.exports = {
    createPenjualan(reqArgs){
        return penjualan.create(reqArgs)
    },
    listPenjualan(){
        return penjualan.find()
    }
}