/* ========== type Ani ========*/
let typed = new Typed(".typing", {
    strings:["","Computer Engineer & Web Designer","Web Developer","Computer Engineer"],
    typeSpeed:150,
    BackSpeed:100,
    loop:true
})
/*==*/
const audio = new Audio("./song.mp3");
document.onclick = ()=>{
    audio.play()
}
