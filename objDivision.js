function objDivision(myobj) {
        var objprime={};
        var objno={};
          function isPrimeNum(num){
                    if(num<3)  {return false}
                        for (var i = 2; i < num/2+1; i++) {
                                if (num%i==0){
                                 return false;//表示bu是质数
                                }
                          };
                            return true;//表示为质数
                    
            }
        console.log("我在检查是否为质数。。");
        for(const k in myobj){
            if(isPrimeNum(myobj[k])){
                    objprime[k]=myobj[k];
                    
            }
            else{
                objno[k]=myobj[k];
            }
        }
        
        var erobj={};
        erobj["objprime"]=objprime;
        erobj["objno"]=objno;
        return erobj;


};
module.exports = objDivision;

