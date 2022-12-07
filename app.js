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
    { username: "arsad", name: "Arsad", Enrollment: "" },
    { username: "viral73", name: "Viraj Kumar", Enrollment: "" },
    { username: "dev450", name: "Devkiran Das", Enrollment: "" },
    { username: "anik08", name: "Anik Dutta", Enrollment: "" },
    { username: "shayan2002saha", name: "Shayan Saha", Enrollment: "" },
    { username: "aishikdg", name: "Aishik Dasgupta", Enrollment: "" },
    { username: "Kuntal", name: "Kuntal Mondal", Enrollment: "" },
    { username: "Tomojit_LS", name: "Tomojit Banerjee", Enrollment: "" },
    { username: "mrinmoypolley35", name: "Mrinmoy Polley", Enrollment: "" },
    { username: "sanmaynemo", name: "Sanmay Das", Enrollment: "" },
    { username: "codedex11", name: "Sohag Das", Enrollment: "" },
    { username: "daitasur49078", name: "Daita Sur", Enrollment: "" },
    { username: "Shreya_0", name: "Shreya Choudhury", Enrollment: "" },
    { username: "Sanat_banik", name: "Sanat Banik", Enrollment: "" },
    { username: "Sahil", name: "Sahil Tanver Islam", Enrollment: "" },
    { username: "Mitodru_13", name: "Mitodru Ghosh", Enrollment: "" },
    { username: "souradeep-de", name: "Souradeep De", Enrollment: "" },
    { username: "aditi_0610", name: "Aditi Paul", Enrollment: "" },
    { username: "adity_das99", name: "Adity Das", Enrollment: "" },
    { username: "mayurakshi_mondal_22", name: "Mayurakshi Mondal", Enrollment: "" },
    { username: "shivamBasak", name: "Shivam Basak", Enrollment: "" },
    { username: "mousumi_2002", name: "Mousumi Pal", Enrollment: "" },
    { username: "tanmoydas2710", name: "Tanmoy Das", Enrollment: "" },
    { username: "sillycoder_071", name: "Swarna Jha", Enrollment: "" },
    { username: "aamrinislam0", name: "Aamrin Islam", Enrollment: "" },
    { username: "Soumikd_2002", name: "Soumik Datta", Enrollment: "" },
    { username: "Ak_Akash", name: "Soumendu Sadhukhan", Enrollment: "" },
    { username: "amankr7066", name: "Aman Kumar", Enrollment: "" },
    { username: "arka-2204", name: "Arka Prabha Chakraborty", Enrollment: "" },
    { username: "shaswataroy77114", name: "Shaswata Roy", Enrollment: "" },
    { username: "Adarsha02", name: "Adarsha Halder", Enrollment: "" },
    { username: "Biswayan2001", name: "Biswayan Bhattacharya", Enrollment: "" },
    { username: "Debrishi", name: "Debrishi Adhikary", Enrollment: "" },
    { username: "deorc_unity", name: "Saurojit Ghosh", Enrollment: "" },
    { username: "Tiyasab", name: "Tiyasha Bhattacharjee", Enrollment: "" },
    { username: "09062002", name: "Raina Deb", Enrollment: "" },
    { username: "shiwangiii", name: "Shiwangi Jaiswal", Enrollment: "" },
    { username: "Parnashri123", name: "Parnashri Das Adhikari", Enrollment: "" },
    { username: "tyanisa04", name: "Tyanisa Bose", Enrollment: "" },
    { username: "Shweta07", name: "Shweta Kapat", Enrollment: "" },
    { username: "Rishu88", name: "Rishu Raj", Enrollment: "" },
    { username: "anisha_07", name: "Anisha Modak", Enrollment: "" },
    { username: "FlashBack03", name: "Sumeet Dwivedi", Enrollment: "" },
    { username: "ananya_2024", name: "Ananya Mallick", Enrollment: "" },
    { username: "Nooman", name: "Nooman Raza", Enrollment: "" },
    { username: "sree_07", name: "Sreeparna RoyChowdhury", Enrollment: "" },
    { username: "Rishita_01", name: "Rishita Chakraborty", Enrollment: "" },
    { username: "sayandiproy2013", name: "Sayandip Roy", Enrollment: "" },
    { username: "Sanmoy_2002", name: "Sanmoy Dam", Enrollment: "" },
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
