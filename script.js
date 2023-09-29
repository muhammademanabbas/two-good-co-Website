function  video_animation  (){
    let video_container  =   document.querySelector('.video_container');
let playBtn  =   document.querySelector('#play');

video_container.addEventListener("mouseenter" , function  (){
    gsap.to(playBtn  ,  {
        scale : 1   , 
        opacity  :  1
    })
})
video_container.addEventListener("mouseleave" , function  (){
    gsap.to(playBtn  ,  {
        scale : 0   , 
        opacity  :  0
    })
})
video_container.addEventListener("mousemove" , function  (details){
    gsap.to(playBtn  ,  {
       left  :  details.x-50, 
       top  :  details.y-70
    })
})
}
video_animation  ();
function  loading_animation (){

 gsap.from(".page-1 h1" ,   {
    y  : 200  ,  
    opacity   :  0  ,
    duration :  0.4  , 
    delay :  0.4  ,   
    stagger :  0.2
 })
}
loading_animation() ;
document.addEventListener("mousemove"  , function  (dets)  {
    gsap.to  ('#cursor' ,  {
        top :  dets.y, 
        left :   dets.x
    })
 }) 
    function  cursorImages(container , color  ){
        if  (color == "" || color  == null ){
            color  =   "#cdba9a"
        }
        document.querySelector(`.page-4 ${container}`).addEventListener("mouseenter" ,   function(){
            this.style.cursor =  'pointer'
            document.querySelector('#cursor').style.backgroundColor = `${color}`
            gsap.to("#cursor" ,  {
                transform: `translate(-50% , -50%) scale(1)` ,  
            })
        }) ;  
        document.querySelector(`${container}`).addEventListener("mouseleave" ,   function(){
            document.querySelector('#cursor').style.backgroundColor = `${color}`
            gsap.to("#cursor" ,  {
                transform: `translate(-50% , -50%) scale(0)` ,  
            })
        }) ;  
    }
    cursorImages("#lefty")   ;   
    cursorImages("#lefty2" , "rgb(100, 100, 100)")   ;   
    cursorImages("#righty" ,   "#80a3bb")   ;   
    cursorImages("#righty2" ,   "rgb(183, 240, 183)")   ;   

        function menu_animation  ()  {
            let menu  =  document.querySelector('#menu-expand')  ;  
        let navHeadings  =  document.querySelectorAll('.nav-part-3 h1')  ;  
        let navPart1  =  document.querySelector('.nav-part-1 svg ')  ;  
        let navPart2  =  document.querySelectorAll('.nav-part-2 h4')  ;  
        let close =  document.querySelector('#close')  ;  
        let nav  =   document.querySelector('#nav')  ;  

        menu.addEventListener('click', function(){
            menu.style.display = "none" ; 
            close.style.display = "block" ; 
            gsap.to(nav,{
                height   :  "100vh" ,  
            },"same")
            gsap.from(navHeadings,  {
                x:240, 
                stagger : 0.1 , 
                oapcity: 0  , 
            })
            gsap.to(nav,  {
              backgroundColor  : "#000" , 
            },"same")
            gsap.to(navPart1,  {
                color:"#fff"
            },"same")
            gsap.to(navPart2,{
                color:"#fff"
            },"same")
            gsap.to(document.querySelector('.smily'),{
                color:"#fff"
            },"same")
        })
        close.addEventListener('click', function(){
            menu.style.display = "block" ; 
            close.style.display = "none" ; 
            gsap.to(nav,{
                height   :  "108px" ,  
                color:"#000"  ,  
                bacgroundColor  :  "#fff"
            })
            gsap.to(nav,  {
                backgroundColor  : "transparent" , 
              },"same")
              gsap.to(navPart1,  {
                  color:"#000"
              },"same")
              gsap.to(navPart2,{
                  color:"#000"
              },"same")
              gsap.to(document.querySelector('.smily'),{
                color:"#000"
            },"same")
        })
}
menu_animation()  ; 

function  menu_with_scrollTrigger(){
    gsap.to(document.querySelector('.nav-part-1'),  {
        opacity :  1   , 
        duration  :  0.3, 
        transform :  `translateY(-70%)` ,
        scrollTrigger:{
            trigger: ('nav')  ,  
            scroller:'body' , 
            // markers:true ,  
            start:  `top -2%` ,
            end :  'top -2%' ,  
            scrub :  2
        }
    })
    gsap.to(document.querySelectorAll('.nav-part-2 .none'),  {
        oapcity :  1  ,  
        duration  :  2, 
        transform :  `translateY(-150%)` ,
        scrollTrigger:{
            trigger: ('nav')  ,  
            scroller:'body' , 
            // markers:true ,  
            start:  `top -2%` ,
            end :  'top -2%' ,  
            scrub :  2
        }
    })
}
menu_with_scrollTrigger()

