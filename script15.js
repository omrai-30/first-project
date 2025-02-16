console.log("Vishal is a hacker")
console.log("shubham is a hacker")

setTimeout(() => {
   console.log("I am a student:")
}, 2000);

setTimeout(() => {
   console.log("I am a student1:")
}, 2000);
console.log("THe end")

const fn = () =>{
   console.log("Nothing")
}

const Callback = (arg) => {
   console.log(arg)
   fn()
}
const loadScript = (src, Callback) => {
   let sc = document.createElement("script")
   sc.src = src;
   sc.onload = Callback("Vishal",fn);
   document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", Callback)