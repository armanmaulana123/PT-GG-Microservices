const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Terhubung ke database MongoDB');
  } catch (error) {
    console.error('Koneksi MongoDB gagal', error);
  }
};

connectDB()
