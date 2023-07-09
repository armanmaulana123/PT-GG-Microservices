const { produk } = require('../models')

module.exports = {
    listProduk(){
        return produk.find()
    },
    createProduk(reqArgs){
        return produk.create(reqArgs)
    },
    updateProduk(id, reqArgs){
        return produk.findByIdAndUpdate(id, reqArgs, {useFindAndModify: false})
    },
    deleteProduk(id){
        return produk.findByIdAndRemove(id)
    },
    showProduk(id){
        return produk.findById(id)
    }

}