const penjualanService = require('../services/penjualanService')
const produkService = require('../services/produkService')
const detailPenjualanService = require('../services/detailPenjualanService')
const pelangganService = require('../services/pelangganService')

module.exports = {
    async createPenjualan(req, res){
        try{
            const subtotal = []
            const produk = req.body.produk
            const updatedProduk = await Promise.all(produk.map(async (data) => {
                const dataProduk = await produkService.showProduk(data.id_produk);
                data.subtotal_produk = dataProduk.harga * data.jumlah_produk;
                subtotal.push(data.subtotal_produk)
                return data;
            }));
            let total = 0
            subtotal.forEach(data => {
                total += data
            })
            req.body.total_harga = total

            const dataPenjualan = {
                "id_pelanggan": req.body.id_pelanggan,
                "tanggal_penjualan": new Date(req.body.tanggal_penjualan),
                "total_harga": req.body.total_harga
            }
            const addPenjualan = await penjualanService.createPenjualan(dataPenjualan)
            produk.forEach(data => {
                data.id_penjualan = addPenjualan.id
            })

            const addDetail = await detailPenjualanService.createDetailPenjualan(req.body.produk)

            const data = [
                {
                    data_penjualan: addPenjualan,
                },
                {
                    detail_penjualan: addDetail
                }   
            ]

            res.status(201).json({
                status: "Berhasil",
                message: "Data Berhasil Ditambahkan",
                data: data
            })

        }catch(err){
            res.status(500).json({
                status: "Error",
                message: err.message
            })
        }
    },
    async listPenjualan(req, res){
        try{
            const penjualan = await penjualanService.listPenjualan()
            if(penjualan.length > 0){
                res.status(200).json({
                    status: "OK",
                    message: "Data Ditemukan",
                    data: penjualan
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
    async showDetail(req, res){
        try{
            const id = req.params.id
            const detailPenjualan = await detailPenjualanService.showDetailPenjualan(id)
            
            if(detailPenjualan.length > 0){
                res.status(200).json({
                    status: "Berhasil",
                    message: "Data Ditemukan",
                    data: detailPenjualan
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