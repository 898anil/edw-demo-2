const express = require('express')

const app = express()

app.get("/", (req, res)=>{
	res.send("Hello World")
})

app.listen(3434, ()=>{
	console.log("App listening at port 3434")
})