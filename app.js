const express=require('express');
//const username=require('../models/username');
const {  main } = require('./models/username.js');
const app=express();
const port=3000||process.env.PORT;
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.get('/',(req,res)=>{
	    res.render('index');
})
app.get('/:username',(req,res)=>{
	console.log(req.params);
	//res.render('username',{username:req.params.username});
	main();
	
})
app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});