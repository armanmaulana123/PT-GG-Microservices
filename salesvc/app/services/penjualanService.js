const penjualanRepository = require('../repositories/penjualanRepository')

module.exports = {
    async createPenjualan(reqBody){
        const add = await penjualanRepository.createPenjualan(reqBody)
        return add
    },
    async listPenjualan(){
        const penjualan = await penjualanRepository.listPenjualan()
        return penjualan
    }
}