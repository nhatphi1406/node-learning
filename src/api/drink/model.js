import mongoose from 'mongoose'
import {Category} from '../category/model'

var Schema = mongoose.Schema;
var drinkSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    pictures: [String],
    status: Boolean,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }

})
var Drink = mongoose.model('Drink', drinkSchema);
module.exports = { Drink }