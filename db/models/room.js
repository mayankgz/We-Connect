// Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const roomSchema = new Schema({
    'roomname':{type:SchemaTypes.String, required:true, unique:true}
});
const UserModel = connection.model('ROOMS', roomSchema);
module.exports = UserModel;