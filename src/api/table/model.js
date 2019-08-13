import mongoose from 'mongoose'
var Schema = mongoose.Schema;
var tableSchema = new Schema({
    customerName: String,
    tableStatus: Number
})
var Table = mongoose.model('Table', tableSchema);
module.exports = { Table }