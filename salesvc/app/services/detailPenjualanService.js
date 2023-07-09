const detailPenjualanService = require('../repositories/detailPenjualanRepository')

module.exports = {
    async createDetailPenjualan(reqBody){
        const add = await detailPenjualanService.createDetailPenjualan(reqBody)
        return add
    },
    async showDetailPenjualan(id){
        const detailPenjualan = await detailPenjualanService.showDetailPenjualan(id)
        console.log(detailPenjualan)
        return detailPenjualan
    }
}