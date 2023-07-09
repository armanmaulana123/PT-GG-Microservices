const pelangganService = require('../services/pelangganService')

module.exports = {
    async listPelanggan(req,res) {
        try {
            const pelanggan = await pelangganService.listPelanggan()
            .then((data) => {
                if(data.length > 0){
                    res.status(200).json({
                        status: "OK",
                        message: "Data Ditemukan",
                        data: data
                    })
                }else{
                    res.status(404).json({
                        status: "Gagal",
                        message: "Data Kosong"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    status: "Gagal",
                    message: err.message
                })
            })
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async createPelanggan(req, res){
        try{
            const add = await pelangganService.createPelanggan(req.body)
            res.status(201).json({
                status: "Berhasil",
                message: "Data Berhasil Ditambahkan",
                data: add
            })
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async updatePelanggan(req, res){
        try{
            const id = req.params.id
            const update = await pelangganService.updatePelanggan(id, req.body)
            if(update){
                res.status(201).json({
                    status: "Berhasil",
                    message: "Data Berhasil Diubah",
                    data: update
                })
            }else{
                res.status(404).json({
                    status: "Gagal",
                    message: "Data Tidak Ditemukan"
                })
            }
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async deletePelanggan(req,res){
        try{
            const id = req.params.id
            const deletePelanggan = await pelangganService.deletePelanggan(id)
            if(deletePelanggan){
                res.status(201).json({
                    status: "Berhasil",
                    message: "Data Berhasil Dihapus",
                    data: deletePelanggan
                })
            }else{
                res.status(404).json({
                    status: "Gagal",
                    message: "Data Tidak Ditemukan"
                })
            }
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async showPelanggan(req, res){
        try{
            const id = req.params.id
            const pelanggan = await pelangganService.showPelanggan(id)
            if(pelanggan){
                res.status(200).json({
                    status: "Berhasil",
                    message: "Data Ditemukan",
                    data: pelanggan
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
                message: "Id Tidak Valid"
            })
        }
    }
}