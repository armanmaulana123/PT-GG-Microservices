module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_produk: {
                type: String,
                trim: true,
                required: true
            },
            harga: {
                type: Number,
                trim: true,
                required: true
            },
            deskripsi: {
                type: String,
                trim: true,
                required: true
            },
            foto_produk: String,
        },{
            timestamps: true
        }
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id

        return object
    })

    return mongoose.model("produk", schema)
}