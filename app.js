var express = require("express");
var app = express();

// tell express to use/serve the contents of public folder
app.use(express.static("public"));

// tell Express to drop .ejs on all ejs templates
app.set("view engine", "ejs");


// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("home");
});

// fallinlovewith ROUTE
app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  // {thingVar: thing} passes thing variable's value to thingVar as an object
  res.render("love", {thingVar: thing});
});

// posts ROUTE
app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"}, 
    {title: "My adorable pet bunny", author: "Charlie"}, 
    {title: "Can you believe this pomsky?", author: "Colt"} 
  ];
  res.render("posts", {posts: posts});
});


// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Server has started on port 3000...");
});