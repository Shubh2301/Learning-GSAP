let main=document.querySelector("#main");
let cursor=document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out"
   })
    
})