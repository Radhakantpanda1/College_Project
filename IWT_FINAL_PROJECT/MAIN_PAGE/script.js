var right_content_scroller=document.getElementById('right-content-scroller')
var left_content_scroller=document.getElementById('left-content-scroller')
const inner = document.querySelector('.inner');
const images = document.querySelectorAll('.scrolling-container img');
const totalWidth = Array.from(images).reduce((total, img) => total + img.offsetWidth + 20, 0); 
document.getElementById('current-year').textContent = new Date().getFullYear();

var timeLine=gsap.timeline()
var nav_time_line=gsap.timeline()
nav_time_line.from('#top-nav',{
    y:-90,
    opacity:0,
    duration:0.9
})
nav_time_line.from('.platform-name span',{
    opacity:0,
    scale:0,
    delay:0.2,
    stagger:0.2
})
timeLine.to('.nav-cont',{
    right:0,
    duration:0.5
})
timeLine.from('.nav-cont h2',{
    x:160,
    opacity:0,
    duration:0.5,
    stagger:0.19,
     
})
timeLine.from('.nav-cont i',{
    opacity:0
})
timeLine.pause()
right_content_scroller.addEventListener('click',()=>{
    timeLine.play()
})
left_content_scroller.addEventListener('click',()=>{
    timeLine.reverse()
})
gsap.from('#svg1',{
    
    opacity:0,
    x:-100,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:'#svg1',
        scroller:'body',
        //markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.from('#svg2',{
    
    opacity:0,
    x:-100,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:'#svg2',
        scroller:'body',
       // markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.from('#svg3',{
    
    opacity:0,
    x:-100,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:'#svg3',
        scroller:'body',
       // markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.from('.about-us-card',{
    
    opacity:0,
    x:100,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:'.about-us-card',
        scroller:'body',
       // markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.from('.mission-card',{
    
    opacity:0,
    x:100,
    delay:0.5,
    duration:2,
    scrollTrigger:{
        trigger:'.mission-card',
        scroller:'body',
       // markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.from('.vision-card',{
    
    opacity:0,
    x:100,
    delay:0.5,
    duration:2,
    
    scrollTrigger:{
        trigger:'.vision-card',
        scroller:'body',
      //  markers:true,
        start:"top 50%",
        end:'top 20%',
        scrub:true
    }
})
gsap.to(inner, {
    x: -totalWidth / 2,
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
    }
});

gsap.to('.video-inner', {
    x: -totalWidth / 2,
    duration: 20,
    ease: "none",
    repeat: -1,
    modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-inner video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});
