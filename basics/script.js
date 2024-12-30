 //js code is running on browser and js is dynamically typed language bcz it no need to declar the type of the data eg int float
 console.log("happyeee")//; -semicolon is not nessarry but without semicolon is working
 // alert("check the mes");//alert is the statement-a line of code

  //variables are used to store the data, three type of variables in js let ,constant,var
  //1 byte is equal to 8bit eg 10 bianary number 1010 itha store pana 8byte needed
  let score=0 //initialization 
  score =10 //assignment 10 is assigned to score
  console.log(score)
  
  //eg 1 amount=1000 o/p your bill is 1000
  let amount=1000
  console.log("your bill amount is RS." +amount)

  //dynamically typed language eg 
  let value ="no values"
  console.log(typeof(value))

  //constant eg 
  const pi=3.14
 // pi=8.9 ipadi change pana mudiyathu bcz its constant 
  console.log(pi)

  //var 2015 ota stop bcz its old 

  /*operators
  
  arithmetic operators : + - *  **- power of num  % ++  /
  assignment op: +=  -= *=  %= ++= 
  comparsion op: == === != !== > < >= <= 
  logical op: && || ! 
  bitwise op: & | ~ ^ << >>  >>>


  special numbers 
   infinity eg 5/0=infinity it will be store in variable a
   NaN - not a number eg 0/0 or math.sqrt(-1)
   null undefined , typeof 
   autometic type converion eg "5" -1 =ans 3

   eg a='5' typeof -string but a==5 conpare pana true typeof include paani check panumana === use pananum
   
   &&  | | two condistion ans vaichu true or flase uh ans tharunum
   & single symbol use pana 0 or 1 uh varum 0 - flase 1-true
   eg a=5 -0101 b=7 -0111 a&b 0101
   left shift operation a<<1  a=5 -0101 a<<1 ans 10
   */

   // user input get 
//    let name =prompt("whats your name ?")
//    console.log("hii",name)

//    let ticket=prompt('how many tickets you want?')
//    //console.log("you should pay " ,ticket*20) //now ticket type is string but the console ans is number 
//    console.log("you should pay" ,Number(ticket)*20)

// let a=prompt("enter the number")
// // console.log(a+10) //string + number meaning then o/p is eg a=4 410
// console.log(Number(a)+10)

//DOM -document object model -use html code full document convert pani 
// documet la irunthu thaniya oru itha js kuta conect pananumna document.getelementbyid use panum

//math functions

// Math.round(5.8) o/p -6 point round or whole Numberah convert panum 
// Math.floor(5.8) o/p-5 point aprm irukaratha consider panathu 
// Math.ceil(5.8)or(5.1) o/p - 6 point ku munnadi iruka number ku next number tharum
// Math.sqrt(55) o/p -7.4161 55 ota square pani tharum
// Math.abs(-9) o/p-9 ithu positive value convert panum
// Math.pow(8,5) 8 power 5 o/p tharum
// Math.min(2,5,7,8,0) min value tharum
// Math.max()
// Math.random()*6 0 to 5.5 varaikum etho oru number sd panum 
// Math.floor(Math.random()*6)+1 floor -point whole number convert 

// math -oru object athula neraiya function iruku js la like above 

// String -group of characters  its including numbers and special characters
//let str1="gtfydhuxj67*&fghj"
//let str2="tfrgydeu" str1+str2 or str1.concat(str2) o/p gtfydhuxj67*&fghjtfrgydeu concat oru method that taking more then one str 

/* partitioning string 
slice(strat ,end) str2.slice(4,10) op rather its starting with 0 and last la iruthu get panum str2.slice(-5) op value
substring(start,end)
substr(strat,length) str2.substr(4,10) 10 meaning 10 characters count irukanum
str1.replace("strive,aim ")
str1.touppercase() str2.tolowercase()
str1.length total charecters
str1.trim() -extra spaces remove str1.trimStart() str1.trimEnd()
let bill='Rs.10' bill.length op -5  bill.padend(7,'0') -meaning 0 last la add panum next 7 mean 7 characters count vara varaikum add aagum 
str1[1] op t str1.charAt[1] same op str1.charCodeAt(1) 116 bcz t ota unique code value 
str1.indexof('e) op 5 str1.lastindexof('e') op 23 illatha oru latter kudutha athu -1 uh ans varnum
str1.search('not' ) op 7 bcz 7th index la not strat aaguthu
str1.includes("not") true str1.startwith('s') 
 */

//eg my name dharshini 


// Define the name
let name = "dharshini";

// Generate a random index between 0 and the length of the name
let randomIndex = Math.floor(Math.random() * name.length);

// Get the letter at the random index
let randomLetter = name[randomIndex];

// Print the random letter
console.log("Random letter from the name:", randomLetter);


//template literals 
//intro in 2015 with ECMAScript6 or ES6

let firstname="dharshu "
let lastname="eswaran"
let city="erode"

console.log(firstname+" "+lastname+ " lived in "+city)

//above alternate -backtick -ithula space ellam kuduka no need 

let sen= `${firstname} ${lastname} lives in ${city}`
console.log(sen)

//multiline backtick 
let h=`happy
birthday`
console.log(h)

//single and double line quotes in string
// c='cat's name is tuti' o/p erro bcz cat ota finish uh eduthukum ' 
c="cat's name is tuti"

// or backtick 

c=`cat's name is tuti`

console.log(c)

// eg "you have 5 items in your cart 
// your bill amount is $95"
let items=5
let totalamo=95
let total=`you have ${items} items in your cart 
your bill amount is $ ${totalamo}`

console.log(total)

//numpy - numerical python  - a python library to perform operations on large data

// arrays
let num=10
let name1="dharshini"

let cities=["chennai" ,"madurai", "trichy"]
let marks=[78,56,99,55]

// length -total elements in the array
console.log(cities.length)
console.log(marks.length)

//access 2nd elements from start -index starts with 0
console.log(cities[1])
// access 3rd ele in array
console.log(cities[3])
// last element 
console.log([marks[marks.length-1]])
// mix of int and  string
let arr=[4,6,78,9,'f','gehj',[3,4]]
console.log(arr)
console.log(arr[5][0])

// 2d array 
let matrix=[[3,4,5],[6,7,8],[9,2,3]]
console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][2])
console.log(matrix[2][1])

//array methods

let array=['a','b','c','d','e']

// push -add elements to the end 
array.push('k')
console.log(array) //athu count or new length of array uh op tharum 

//pop -remove the elements
console.log(array.pop())

// shift - remove the elemnts on starting and returns remove element
console.log(array.shift())
console.log(array)

// unshift - add the elemnts on starting and returns remove element
console.log(array.unshift('a'))
console.log(array)

//middle or other elem delete 

// delete array[2]
// console.log(array)

// delete alternate splice
// delete
 array.splice(2,1) //mean 2position la iruthu start aagum 1 delete
 console.log(array)
 array.splice(2,2) //mean 2position la iruthu start aagum 2 delete
 console.log(array)
// replace
 array.splice(2,1,'m') //mean 2position la iruthu start aagum 1 delete m uh replace
 console.log(array)
// 2 position replce
 array.splice(1,2,'k','d')
 console.log(array)
// insert

array.splice( 1,0,'d')
console.log(array)

// slice(startind index ending index )
// ending index not included
console.log(array.slice(1,3))
console.log(array.slice(-1))

// reverse -perment ah reverse aaidum 
array.reverse()
console.log(array)

// join -converts array to string 
let str1=array.join()
console.log(str1)

// split -converts string to array  
let str2="k,d,l,o,v,e"
let arr2=str2.split(',')
console.log(arr2)

// concat and spread operator 
let num1=[1,2,3]
let num2=[4,5,6]

let joinArr=[num1,num2] //2d array ahh varnum o.p
console.log(joinArr)


//1d array o.p 
joinArr =num1.concat(num2)
console.log(joinArr)

// or spread oper

let joined=[...num1,...num2]
console.log(joined)

// eg 

let array5=[5,8,10,7,9,11]
// replace -splice
array5.splice(3,3,17,19,111)
console.log(array5)
//starting  insert -unshift
array5.unshift(100)
console.log(array5)
// last insert -push
array5.push(200)
console.log(array5)
// add 1000 at end 
array5.push(1000)
console.log(array5)
// insert 0 in the middle and use arr.length to find middle position 
console.log(array5.push(4,0)) //its worng 

