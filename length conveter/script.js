// how to create functions
function convert(){
//cm la enter aagura number js la get panum  
const cmval=Number (document.getElementById("input").value) // meaning input la kudukura value get panrom ithula number word add panum bcz without number ots type string ,ithu line stroe panum oru variable athu name val 
const incheval=cmval/2.54 //cm la irunthu inches ah convert panan div by 2.54
const result=document.getElementById("result")
result.innerHTML=incheval.toFixed(2) + " inches" //.tofixed(2) .aprm two values mattum pothum
//onclick=convert() ithu button click panum pothu convert function irukarthu work aagum
//functions perfrom wel defined task 
}