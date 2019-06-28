/**
 *Created by Jiraiya on 2019-3-28 11:38:58
 */

const imageToAscii = require("image-to-ascii");
 
// The path can be either a local path or an url
imageToAscii('./1.png', (err, converted) => {
    console.log(err || converted);
});