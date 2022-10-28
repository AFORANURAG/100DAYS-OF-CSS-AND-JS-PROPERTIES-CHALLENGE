let x=0 
let box=document.querySelector("#box")
let y=0
function myfunc(){
  if(y%2==0){
    let id$=setInterval(animator,5)
    setTimeout(clearinterval,2250)
    function clearinterval(){
    clearInterval(id$)
    }
    function animator(){ 
        x=x+1
    box.style.left=x+"px"    
    box.style.top=x+"px"    
    }
y++
console.log(y)
  }else if(y%2!==0){
 
    let id$1=setInterval(animator1,5)
    setTimeout(clearinterval1,2250)
    function clearinterval1(){
    clearInterval(id$1)
    }
    function animator1(){ 
        x=x-1
    box.style.left=x+"px"    
    box.style.top=x+"px"    
    }
y++
console.log(y)
}  
    
// problem statement is  clicking on it again basically returns it backs to its normal initial postion i.e topleft corner








}
// set timeout is basically used whenever you want to call a function once after a interval
//set interval is used to call out a function after every interval , so your function is going to run after some specific
//time 
//set timeout and set interval has some unique ids, these ids are used to clear the timeout and intervals and it is important 
// set timeout can be used to pop out some important pages like sign up page or chatbots , so when user visits the webpage
//it will pop out a signup page after a interval , and this is important  
// and set timeout can be used to stop interval after sometime
// Asynchronous js and XML(AJAX)
// A XMLHTTPREQUEST OBJECT(BUILT IN OR PROVIDED BY BROWSWER) FOR TO REQUEST DATA FROM WEB SERBER AND DOM TO DISPLAY THE DATA.
// So we were familiar with ajax from the very beginning.
