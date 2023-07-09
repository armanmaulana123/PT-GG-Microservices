const { pelanggan } = require('../models')

module.exports = {
    listPelanggan(){
        return pelanggan.find()
    },
    createPelanggan(reqArgs){
        return pelanggan.create(reqArgs)
    },
    updatePelanggan(id, reqArgs){
        return pelanggan.findByIdAndUpdate(id, reqArgs, {useFindAndModify: false})
    },
    deletePelanggan(id){
        return pelanggan.findByIdAndRemove(id)
    },
    showPelanggan(id){
        return pelanggan.findById(id)
    }
}