//import axios from "axios";
const axios = require("axios");

module.exports.main =async function main() {
  const res = await axios
    .get(
      `https://leetcode.com/graphql/?query={ 
			matchedUser(username: "user4029ok") 
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
	let resData=data.data.data.matchedUser.submitStats
      console.log(resData);
      //window.location.href = `/used`;
    });
};
//export default main;
