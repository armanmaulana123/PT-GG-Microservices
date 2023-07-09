const {detailPenjualan} = require('../models')

module.exports = {
    createDetailPenjualan(reqArgs){
        return detailPenjualan.create(reqArgs)
    },
    showDetailPenjualan(id){
        return detailPenjualan.find({id_penjualan: id})
    }
}