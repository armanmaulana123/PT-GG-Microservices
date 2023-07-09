module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_pelanggan: {
                type: String,
                trim: true,
                required: true
            },
            email_pelanggan: {
                type: String,
                trim: true,
                required: true
            },
            no_telp_pelanggan: {
                type: String,
                trim: true,
                required: true
            },
            alamat_pelanggan: {
                type: String,
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

    return mongoose.model("pelanggan", schema)
}
