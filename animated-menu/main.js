const menuBtn=document.querySelector(".menuBtn");
const exitBtn=document.querySelector(".exit");

let t1 = gsap.timeline({paused:true});

t1.to(".menu",{ opacity:1, duration: 0.8, top: 0 });
t1.to(
    ".nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 0.8,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.3"
);

menuBtn.addEventListener("click",()=>{
    t1.play().timeScale(1);
})
exitBtn.addEventListener("click",()=>{
    t1.timeScale(2.5)
    t1.reverse();
})


