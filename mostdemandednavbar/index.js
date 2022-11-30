document.getElementById("icon").addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("my name is anurag upadhyay")
    var idname=document.getElementById("navbar")
    if(idname.className==="topnav"){
    idname.className+=" responsive"
    }else{
    idname.className="topnav"
    }
    console.log(idname.className)

})

