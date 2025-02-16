console.log("We here study about the events:")
let Button = document.getElementById("BTN") 

Button.addEventListener("dblclick", ()=>{
    alert("I was clicked")
    document.querySelector(".box").innerHTML="<b> hey you were clicked</b> Enjoy your click!"
})

Button.addEventListener("contextmenu", ()=>{
    alert("Don't right click please!")
    //document.querySelector(".box").innerHTML="<b> hey you were clicked</b> Enjoy your click!"
})

Button.addEventListener("keydown", (e)=>{
   console.log(e.key, e.keyCode)

   
})