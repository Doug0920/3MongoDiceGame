var express = require('express');
var router = express.Router();

/* POST to adduser. */
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('playerlist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});


/* GET userlist. */
router.get('/userlist', function(req, res) {
  var db = req.db;
   var collection = db.get('playerlist');
   collection.find({},{},function(e,docs){
     res.json(docs);
   });
 });

 /* DELETE to deleteuser. */
 router.delete('/deleteplayer/:id', function(req, res) {
     var db = req.db;
     var collection = db.get('playerlist');
     var userToDelete = req.params.id;
     collection.remove({ '_id' : userToDelete }, function(err) {
       res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
     });
   });


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})



module.exports = router;
