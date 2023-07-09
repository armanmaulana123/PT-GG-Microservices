const mongooseAutoPopulate= require("mongoose-autopopulate")

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            id_pelanggan: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'pelanggan',
                required: true,
                autopopulate: true
            },
            tanggal_penjualan: {
                type: Date,
                trim: true,
                required: true
            },
            total_harga: {
                type: Number,
                trim: true,
                required: true
            }
        },{
            timestamps: true
        }
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id

        return object
    })

    schema.plugin(mongooseAutoPopulate)

    return mongoose.model("penjualan", schema)
}