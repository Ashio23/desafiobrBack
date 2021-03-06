const mongoose = require('mongoose');

const connectDataBase = async () => {
  const conexion = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected', conexion.connection.host);
};

module.exports = connectDataBase;
