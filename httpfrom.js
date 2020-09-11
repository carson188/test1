var http = require('http');
var url = require('url');
var qs = require('querystring');
var mergeAndnorepeat = require('./mergeAndnorepeat');
var objDivision = require('./objDivision');
var writeErobj = require('./writeErobj');

http.createServer(function (req,res){
    if(req.method=='GET'){
            doGet(req,res);
    }else if(req.method=='POST'){
            doPost(req,res);
    }else{
        res.end();
    }
}).listen(1337,'127.0.0.1');

function doGet(req,res){
    // var obj = qs.parse(url.parse(req.url).query);
    // console.log(obj);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="post">');
    res.write('u1:<input name="u1"><br>');
    res.write('u2:<input name="u2"><br>');
    res.write('u3:<input name="u3"><br>');
    res.write('u4:<input name="u4"><br>');
    res.write('u5:<input name="u5"><br>');
    res.write('<input type="submit" value="submit">' );
    res.write('</body>');
    res.write('</html>');
    res.end();
}
function doPost(req,res){
        var formData='';
        req.on('data',function(data){
                formData+=data;
        });
        req.on('end',function(){        
            var obj =qs.parse(formData);
            
            // var myobj=mergeAndnorepeat(obj);

            // mergeAndnorepeat(obj).then((data) => {
            //     var myobj = data
            //     console.log('myobj---', data)
            //     var erobj = objDivision(myobj);
            //     var str=writeErobj(erobj);
            //     res.end(str);
            // })

            // var erobj = objDivision(myobj);
            // var str=writeErobj(erobj);
            // res.end(str);
          const getObj = async () => {
                var myobj = await mergeAndnorepeat()
                console.log('myobj===', myobj)
                var erobj = objDivision(myobj);
            //     var str=writeErobj(erobj);
            //     res.end(str);
          }
          getObj()
        });
        
}
console.log('Server running at http://127.0.0.1:1337/');