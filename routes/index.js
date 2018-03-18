var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},

    }, {collection: 'UserData'});

 var UserData = mongoose.model('UserData', userDataSchema);


  /* GET home page. */
 router.get('/', function(req, res, next) {
    res.render('index');

    });

     //save info db
    router.post('/vi', function(req, res, next) {

        var item = {
        name: req.body.name,
        surname: req.body.surname

        };

 var data = new UserData(item);
    console.log(data.id);
    data.save();
     res.render('vi',{
              name:data.name,
              surname:data.surname,
                 });
        });

    module.exports = router;