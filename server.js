const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my_store_thanghn')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;

const users = new Schema({
    username: String,
    phone: String
}, {
    collation: 'users'
})

const UsersModel = mongoose.model('user', users)

UsersModel.create({
    username:'emnvt',
    phone: '0445056645'
}).then(data=> {
    console.log(data)
}).catch(err=> {
    console.log(err)
})