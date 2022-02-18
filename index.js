const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
app.use(express.json())
app.get('/name', (req,res) =>{
	res.send('dsadasdas')

})

app.get('/auth',(req,res)=>{
	fs.readFile(path.join(__dirname,'index.html'),(err,html)=>{
		if(err) throw err
			res.end(html)
	})

})
app.post('/v1/authorization',(req,res)=>{
	console.log(req.body.login);
	console.log(req.body.password);
	res.send('Ok');
})
app.listen(8080)
