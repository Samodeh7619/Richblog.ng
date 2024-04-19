// const express = require("express");
// const app = express();
// app.get("/", function(req, res){
    // res.send("<h1>hello world</h1>");
// })

// app.get("/contact", function(req, res){
//     res.send("contact sam on this phone number: 09087654323331 and 890")
// })

// app.get("/", function(req, res){
    //console.log(__dirname)
   //
//    res.sendFile(__dirname + "/index.html");
// })

// app.listen(3000, function(){
//     console.log("server started on port 3000")
// })




// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){


//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function(req, res){
//     console.log(req.body)
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let sum = num1 + num2;
//     res.send("the result is:" + sum);
// });

//  app.listen(3000, function(){
//      console.log("server started on port 3000")
// });



// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){

//     res.sendFile(__dirname + "/bmiCalculator.html");
// });

// app.post("/", function(req, res){
//     console.log(req.body)
//     let width = Number(req.body.width);
//     let height = Number(req.body.height);
//     let BMI = width / (height * height);
//     res.send("Your BMI is n:" + BMI);
// });

//  app.listen(3000, function(){
//      console.log("server started on port 3000")
// });





const express = require("express");
const sql = require("mssql/msnodesqlv8");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let config = {
    server: "RICHARDNERIAH-T\\SQL2014",
    database: "RichBlog",
    username: "RICHARDNERIAH-T\\AkreedSayn",
    password: "",
    driver: "msnodesqlv8",
     Option: {
         trustedConnection: true
    }
}




// sql.connect(config, function(err){
//     if(err)console.log(err);
//     let request = new sql.Request();
//     request.query("select * from dbo.calculator", function(err,records){
//         if(err)console.log(err);
//         else console.log(records);
//     })
// })




app.get("/index.html", function(req, res){

    res.sendFile(__dirname + "/index.html");
 });

app.post("/", function(req, res){
    sql.connect(config, function(err){
        if(err)console.log(err);
        let request = new sql.Request();
        request.query("INSERT INTO contact VALUES ('" + req.body.personID +"','"+ req.body.name + "','"
        + req.body.email+"','" + req.body.subject+"' '" +req.body.massage+ "')", 
        function(err,records){
            if(err)console.log(err);
            else console.log(records);
        })
    })

    let personID = req.body.personID;
    console.log(personID)
});







// app.get("/", function(req, res){

//     res.sendFile(__dirname + "/bmiCalculator.html");
// });

// app.post("/", function(req, res){
//     console.log(req.body)
//     let width = Number(req.body.width);
//     let height = Number(req.body.height);
//     let BMI = width / (height * height);
//     res.send("Your BMI is n:" + BMI);
// });

 app.listen(4000, function(){
     console.log("server started on port 4000")
});











