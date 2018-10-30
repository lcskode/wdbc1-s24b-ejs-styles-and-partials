var express = require("express");
var app = express();

// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("home.ejs");
});

// fallinlovewith ROUTE
app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  // pass thing variable's value to thingVar as an object
  res.render("love.ejs", {thingVar: thing});
});

// posts ROUTE
app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"}, 
    {title: "My adorable pet bunny", author: "Charlie"}, 
    {title: "Can you believe this pomsky?", author: "Colt"} 
  ];
  res.render("posts.ejs", {posts: posts});
});


// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Server has started on port 3000...");
});