const pelangganRepository = require('../repositories/pelangganRepository')

module.exports = {
    async listPelanggan(){
        try{
            const pelanggan = await pelangganRepository.listPelanggan()
            return pelanggan
        }catch(err){
            throw err
        }
    },
    async createPelanggan(reqBody){
        const add = await pelangganRepository.createPelanggan(reqBody)
        return add
    },
    async updatePelanggan(id, reqBody){
        const update = await pelangganRepository.updatePelanggan(id, reqBody)
        return update
    },
    async deletePelanggan(id){
        const deletePelanggan = await pelangganRepository.deletePelanggan(id)
        return deletePelanggan
    },
    async showPelanggan(id){
        const pelanggan = await pelangganRepository.showPelanggan(id)
        return pelanggan
    }
}