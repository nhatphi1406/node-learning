import mongoose from 'mongoose'
var Schema = mongoose.Schema;
var billSchema = new Schema({
    table: {
        type: Schema.Types.ObjectId,
        ref: 'Table'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    note: String
})
var Bill = mongoose.model('Bill', billSchema);
module.exports = { Bill }