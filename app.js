//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))

app.use(express.static("public"))

var items = ["Complete why I am a hindu", "Complete the web dev course", "keep your room clean"]

var workItems = []

app.get("/", function(req, res){
	var today = new Date()
	var options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	var currentDate = today.toLocaleDateString("en-US", options)
	res.render("index", {titleName: currentDate, newItems : items})
})
app.get("/work", function(req, res){
	res.render("index", {titleName: "work", newItems : workItems})
})
app.get("/about", function(req, res){
	res.render("about")
})


app.post("/", function(req, res){
	if(req.body.button == 'work'){
	var item = req.body.newToDo
	workItems.push(item)
	res.redirect("/work")
	}else{
	var item = req.body.newToDo
	items.push(item)
	res.redirect("/")
	}
} )

app.listen(3000, function(){
	console.log("listening at port 3000")
})
