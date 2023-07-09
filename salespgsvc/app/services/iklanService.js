const iklanRepository = require('../repositories/iklanRepository')

module.exports = {
    async CreateIklan(reqBody){
        const tambah = iklanRepository.createIklan(reqBody)
        return tambah
    },
    async ListIklan(){
        try{
            const iklan = await iklanRepository.listIklan();
            return iklan
        }catch(err){
            throw err;
        }
    },
    async ShowIklan(id){
        try{
            const iklan = await iklanRepository.showIklan(id)
            return iklan
        }catch(err){
            throw err;
        }
    }
}