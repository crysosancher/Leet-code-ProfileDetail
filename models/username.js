//import axios from "axios";
const axios = require("axios");

module.exports.userProfile =async (user)=> {
  const res = await axios
    .get(
      `https://leetcode.com/graphql/?query={ 
			matchedUser(username: "${user}") 
			{
			    username
			    submitStats: submitStatsGlobal 
			    {
				acSubmissionNum 
				{
				    difficulty
				    count
				    submissions
				}
			    }
			}
		    }`
    )

    //.then((res) => res.json())
    .then((data) => {
	let resData=data.data.data.matchedUser
	//console.log("line 30",resData);
      //console.log(resData);
      return resData;
      //window.location.href = `/used`;
    });
    return res;
};
//export default main;
