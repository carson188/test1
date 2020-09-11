const { format } = require('path');

function mergeAndnorepeat(obj) {
    var fs =require('fs');
    var myobj={};
    
    this.setObjet = function(obj,obj1,obj2) {
            myobj = Object.assign(obj1,obj2,obj);
            console.log("已经拼接完了，我在去重复u。。");
            //去重复
            var arr9=[]
            for(const k1 in myobj){
                for(const k2 in myobj){
                        if(k1!=k2&&myobj[k1]==myobj[k2]){
                                arr9.push(myobj[k2]);
                                
                        }
                }
            }
            for(var i=0;i<arr9.length;i++){
                for(const key in myobj){
                        if(arr9[i]==myobj[key]){
                                delete myobj[key]
                        }
                }
            }
            
        //     console.log("wwwwwwwwwwwwwww")
        //     console.log(myobj);
            

            
};
// var data= fs.readFileSync('file1.txt');
// var data1= fs.readFileSync('file2.txt');
// var r=data.toString ();
// var obj1 = JSON.parse(r);
// var r1=data1.toString ();
// var obj2 = JSON.parse(r1);
// this.setObjet(obj,obj1,obj2);
// return myobj
return new Promise((resolve, reject) => {
        fs.readFile('file1.txt',function(err,data){

                if(err){
                            console.error(err);
               }
               var r=data.toString ();
               var obj1 = JSON.parse(r);
               fs.readFile('file2.txt',function(err,data1){
                       if(err){
                               console.error(err);
                       }
                       var r1=data1.toString ();
                       var obj2 = JSON.parse(r1);
       
                       this.setObjet(obj,obj1,obj2);
                       // objDivision(myobj);
                       resolve(myobj)
                });
       });
})
// fs.readFile('file1.txt',function(err,data){

//          if(err){
//                      console.error(err);
//         }
//         var r=data.toString ();
//         var obj1 = JSON.parse(r);
//         fs.readFile('file2.txt',function(err,data1){
//                 if(err){
//                         console.error(err);
//                 }
//                 var r1=data1.toString ();
//                 var obj2 = JSON.parse(r1);

//                 this.setObjet(obj,obj1,obj2);
//                 // objDivision(myobj);
//                 return  myobj
//          });
// });

};
module.exports = mergeAndnorepeat;
