import mongoose from 'mongoose'
var Schema = mongoose.Schema;
var categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    pictures: [String],
})
var Category = mongoose.model('Category', categorySchema);
module.exports = { Category }