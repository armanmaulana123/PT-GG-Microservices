const {Iklan} = require('../models')

module.exports = {
    createIklan(reqArgs){
        return Iklan.create(reqArgs)
    },
    listIklan(){
        return Iklan.findAll()
    },
    showIklan(id){
        return Iklan.findByPk(id)
    }
}