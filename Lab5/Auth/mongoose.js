var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Admin:admin12345@cluster0-shard-00-00.673lq.mongodb.net:27017,cluster0-shard-00-01.673lq.mongodb.net:27017,cluster0-shard-00-02.673lq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-o63m6a-shard-0&authSource=admin&retryWrites=true&w=majority',  { useNewUrlParser: true } );
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;