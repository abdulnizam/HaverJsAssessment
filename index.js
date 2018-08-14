import lib from "./src/index";
import fs from 'fs';

// console.log(lib.runProgram('fourB'));

const results = lib.runProgram('fourB');

let final_r = [ ];

results.then(res => {
	// write into file
 	fs.writeFile("/tmp/test", res, err => {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
})

// http endpoint

import http from 'http';

const options = {
  hostname: '127.0.0.1',
  port: 8080,
  path: '/length_request'
};

// Make a request
const req = http.request(options);
req.end();
req.on('information', (res) => {
  console.log(`Got information prior to main response: ${res.statusCode}`);
});
