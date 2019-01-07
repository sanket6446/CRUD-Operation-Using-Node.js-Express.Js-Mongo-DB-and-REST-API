var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {useNewUrlParser: true});

var Schema =  mongoose.Schema;
 var tableentry =  new Schema({
    x : {type:Number, required:true},
    y : {type:Number, required:true}
});
module.exports =   mongoose.model('table', tableentry);

