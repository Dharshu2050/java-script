function convert(){
    const celvalue=Number(document.getElementById("input").value)
    const  farhenhit=(celvalue * 1.8) + 32
    const res=document.getElementById("res")
    res.innerHTML=farhenhit.toFixed(3)
}