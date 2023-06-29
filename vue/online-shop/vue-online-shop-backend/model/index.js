const mongoose = require('mongoose')
const Schema = mongoose.Schema //模型定义文件 用来建模
const model = mongoose.model.bind(mongoose); // 模型对象
const ObjectId = mongoose.Schema.Types.ObjectId;//mongodb的Id

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
})

const Manufacturer = model('Manufacturer', manufacturerSchema);
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
})

const Product = model('Product', productSchema);

module.exports = {
  Manufacturer,
  Product
}