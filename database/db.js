var MongoClient = require('mongodb').MongoClient;
//Create a database named "reactdb":
var url = "mongodb://localhost:27017/reactdb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


var config = {
    development: {
        //url to be used in link generation
        url: 'mongodb://127.0.0.1:27017/reactdb',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '27017',
            db:     'reactdb'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3422'
        }
    }
    };
    module.exports = config;