const produkService = require('../services/produkService')

module.exports = {
    async listProduk(req, res) {
        try{
            await produkService.listProduk()
            .then((data)=>{
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
                    status: "Error",
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
    async createProduk(req, res) {
        try{
            const add = await produkService.createProduk({
                nama_produk: req.body.nama_produk,
                harga: req.body.harga,
                deskripsi: req.body.deskripsi,
                foto_produk: req.file.filename
            })
            res.status(200).json({
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
    async updateProduk(req, res){
        try{
            const id = req.params.id
            const update = await produkService.updateProduk(id, req.body)
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
    async deleteProduk(req, res){
        try{
            const id = req.params.id
            const deleteProduk = await produkService.deleteProduk(id)
            if(deleteProduk){
                res.status(201).json({
                    status: "Berhasil",
                    message: "Data Berhasil Dihapus",
                    data: deleteProduk
                })
            }else{
                res.status(404).json({
                    status: "Gagal",
                    message: "Data Tidak Ditemukan",
                })
            }
        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async showProduk(req, res){
        try{
            const id = req.params.id
            const produk = await produkService.showProduk(id)
            if(produk){
                res.status(200).json({
                    status: "Berhasil",
                    message: "Data Ditemukan",
                    data: produk
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
                message: "Id Tidak Valid"
            })
        }
    }
}