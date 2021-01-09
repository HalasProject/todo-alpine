var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let virtual_db = {
   users:[],
   tasks:[],
}

class Task {
 

   constructor(title,user_id,created_at = Date.now(),description = null,deadline = null){
      this.title = title;
      this.description = description;
      this.deadline = deadline ;
      this.user_id = user_id;
      this.created_at = created_at;
   }
}



app.post('/addTask', function (req, res) {
   body = req.body;
   let new_task = new Task()
 })
 
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("TodoBack Listening at http://%s:%s", host, port)
})