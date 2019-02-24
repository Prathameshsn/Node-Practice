var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');

// db.run("delete from lorem");
// db.run("INSERT INTO lorem (EmpId, EmpNmae)");

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
 
// db.run("INSERT INTO lorem VALUES (Emp)");
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();
 
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });
 
// db.close();

// db.run("INSERT INTO Emp (EmpID, EmpName) VALUES (1,'Priyanka')");

// db.serialize(function() {
    db.each("select name from Actors", function(err, row) {
        console.log(row.name);
    })
// })