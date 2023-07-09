const mongooseAutoPopulate = require('mongoose-autopopulate')

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            id_penjualan: { 
                type: String,
                trim: true,
                required: true
            },
            id_produk: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'produk',
                required: true,
                autopopulate: true
            },
            jumlah_produk: {
                type: Number,
                trim: true,
                required: true
            },
            subtotal_produk: {
                type: Number,
                trim: true,
                required: true
            }
        }
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id

        return object
    })

    schema.plugin(mongooseAutoPopulate)

    return mongoose.model("detailPenjualan", schema)
}