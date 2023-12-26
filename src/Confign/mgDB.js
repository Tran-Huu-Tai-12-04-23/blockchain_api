const mongoose = require('mongoose');

const DB_URL =
    process.env.DB_URL ||
    'mongodb+srv://phucmxst123:Trphuc26112003@web3relation.2hcpzir.mongodb.net/?retryWrites=true&w=majority';
// Kết nối đến MongoDB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
module.exports = db;
