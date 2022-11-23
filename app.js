const express = require("express");
const { userProfile } = require("./models/username.js");
const app = express();
const port = 3000 || process.env.PORT;
const path=require('path')
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "views")));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/crysosancher", async (req, res) => {
  //console.log(req.params);
  //res.render('username',{username:req.params.username});
  const users = [
    { username: "crysosancher", name: "Vibhu Pandey", Enrollment: "1092" },
    { username: "kajal1801", name: "Kajal Jaiswal", Enrollment: "1076" },
    { username: "isha", name: "Isha Khannna", Enrollment: "1075" },
    { username: "ChickyWings01", name: "Kaninika Sen Choudhuri", Enrollment: "1077" },
    { username: "Ipsita", name: "Ipsita Sanyashi", Enrollment: "1074" },
  ];
  let profileDataArray=[];
for(let i=0;i<users.length;i++){
	const profileData=await userProfile(users[i].username);
	profileDataArray.push({
	username:users[i].username,
	name:users[i].name,
	enrollment:users[i].Enrollment,
	easyProblemSolved:profileData.submitStats.acSubmissionNum[1].count,
	mediumProblemSolved:profileData.submitStats.acSubmissionNum[2].count,
	hardProblemSolved:profileData.submitStats.acSubmissionNum[3].count,})
}
console.log(profileDataArray);
  //const profileData = await userProfile("crysosancher");
  //console.log(profileData);
  //console.log("line 16",userData);
  res.render("card", { profileData: profileDataArray });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
