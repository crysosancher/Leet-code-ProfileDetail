const express = require("express");
const { userProfile } = require("./models/username.js");
const app = express();
const port = 3000 || process.env.PORT;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/crysosancher", async (req, res) => {
  //console.log(req.params);
  //res.render('username',{username:req.params.username});
  const users = [
    { username: "crysosancher", name: "Vibhu Pandey", Enrollment: "2011092" },
    { username: "kajal1801", name: "Kajal jaiswal", Enrollment: "2011069" },
  ];
  let profileDataArray=[];
for(let i=0;i<users.length;i++){
	console.log(i)
	let profileData=await userProfile(users[i].username);
	profileDataArray.push({
	username:users[i].username,
	name:users[i].name,
	enrollment:users[i].Enrollment,
	easyProblemSolved:profileData.submitStats.acSubmissionNum[1].count,
	mediumProblemSolved:profileData.submitStats.acSubmissionNum[2].count,
	hardProblemSolved:profileData.submitStats.acSubmissionNum[3].count,})
}
console.log(profileDataArray);
  const profileData = await userProfile("crysosancher");
  //console.log(profileData);
  //console.log("line 16",userData);
  res.render("card", { profileData: profileData });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
