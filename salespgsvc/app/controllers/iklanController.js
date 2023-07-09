const iklanService = require('../services/iklanService')
const axios = require('axios')

module.exports = {
    async tambahIklan(req, res){
        try{
            req.body.status = "diarsipkan"
            const tambah = await iklanService.CreateIklan(req.body)
            res.status(201).json({
                status: "Berhasil",
                message: "Data Berhasil Ditambahkan",
                data: tambah
            })
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async listIklan(req, res){
        try{
            const iklan = await iklanService.ListIklan()
            const updatedIklan = await Promise.all(iklan.map(async (data) => {
                const id_produk = data.produk
                const dataProduk = await axios.get(`http://localhost:8001/produk/${id_produk}`);
                data.produk = dataProduk.data
                return data;
            }));
            if(iklan.length > 0){
                res.status(200).json({
                    status: "Berhasil",
                    message: "Data Ditemukan",
                    data: updatedIklan
                })
            }else{
                res.status(404).json({
                    status: "Gagal",
                    message: "Data Tidak Ditemukan",
                    data: null
                })
            }
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async showIklan(req,res){
        try{
            const id = req.params.id
            const iklan = await iklanService.ShowIklan(id)
            const id_produk = iklan.produk
            const produk = await axios.get(`http://localhost:8001/produk/${id_produk}`)
            iklan.produk = produk.data
            console.log(iklan)
            if(iklan){
                res.status(200).json({
                    status: "Berhasil",
                    message: "Data Ditemukan",
                    data: iklan
                })
            }else{
                res.status(404).json({
                    status: "Gagal",
                    message: "Data Tidak Ditemukan",
                    data: null
                })
            }
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    }
}