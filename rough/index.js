const fs = require('fs');
 
fs.readFile('input1.txt', 'utf8', function (err, data) {
    /* parse data */
    //*splitting according to line
    const sentanceArray = data.split("\n");
    const username=[];
   
    for(let i=0;i<sentanceArray.length;i++){
	username.push(sentanceArray[i].split("=")[1]);
    }

    console.log(username)
});