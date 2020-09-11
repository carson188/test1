var http = require('http');
var str
const express = require('express'); 
const router = express.Router()
function writeErobj(erobj) {
      var fs =require("fs");

      str = JSON.stringify(erobj);
    
       fs.writeFileSync('data.txt',str)

        console.log("数据以写入data.txt...");
        
        return str
};
module.exports = writeErobj;

