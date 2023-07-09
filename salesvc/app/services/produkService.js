const produkRepository = require('../repositories/produkRepository')

module.exports = {
    async listProduk(){
        try{
            const produk = await produkRepository.listProduk()
            return produk
        }catch(err){
            throw err
        }
    },
    async createProduk(reqBody){
        const add = await produkRepository.createProduk(reqBody)
        return add
    },
    async updateProduk(id, reqBody){
        const update = await produkRepository.updateProduk(id, reqBody)
        return update
    },
    async deleteProduk(id){
        const deleteProduk = await produkRepository.deleteProduk(id)
        return deleteProduk
    },
    async showProduk(id){
        const produk = await produkRepository.showProduk(id)
        return produk
    }
}