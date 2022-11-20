const express=require('express');
const {  userProfile } = require('./models/username.js');
const app=express();
const port=3000||process.env.PORT;
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.get('/',(req,res)=>{
	    res.render('index');
})
app.get('/crysosancher',async(req,res)=>{
	//console.log(req.params);
	//res.render('username',{username:req.params.username});
	const profileData=await userProfile();
	console.log(profileData);
	//console.log("line 16",userData);
	res.render('card',{profileData:profileData});
	
})
app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});