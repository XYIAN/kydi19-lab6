const express = require('express'); 
const app = express(); 
app.engine('html', require('ejs').renderFile);//render other files
app.use(express.static("public"));//access img css js or any external file
//routes ---can also be POST method vs get
app.get("/", function(req,res)//root route
{
   res.render("index.ejs");
   //res.send("it works!"); 
   
});
app.get("/mercury", function(req,res)// route 1
{
   res.render("mercury.ejs"); 
});
app.get("/venus", function(req,res)//route 2
{
   res.render("venus.ejs"); 
});
app.get("/mars", function(req,res)//route 3
{
   res.render("mars.ejs"); 
});
app.get("/jupiter", function(req,res)//route 4
{
   res.render("jupiter.ejs"); 
});
app.get("/saturn", function(req,res)//route 5
{
   res.render("saturn.ejs"); 
});


//server listener - run server w/ port number
//8081(have to include in url) , "0, 0 , 0 , 0" -used for php type
app.listen(process.env.PORT, process.env.IP , function()//using local host port 8080 127
{
    console.log("Express Server is Running...");
});
//end basic express code


















//copy pasters :::

// const express = require('express'); 
// const app = express(); 
// //routes ---can also be POST method vs get
// app.get("/", function(req,res)
// {
//   res.send("it works!"); 
// });

// //server listener 
// app.listen("8081" , "0.0.0.0" , function()//using local host
// {
//     console.log("Express Server is Running...");
// });
// //end basic express code