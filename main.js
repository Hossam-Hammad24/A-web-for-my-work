let stars=document.querySelector('.stars');
let moon=document.querySelector('.moon');
let mountain1=document.querySelector('.mountain1');
let mountain2=document.querySelector('.mountain2');
let river=document.querySelector('.river');
let boat=document.querySelector('.boat');
let mountain3=document.querySelector('.mountain3');
let hossam=document.querySelector('.hossam');
let container=document.querySelector('.header');
let btn=document.querySelector('.btn');

window.addEventListener('scroll',function(){
    let value=scrollY;
    stars.style.left= value + 'px'
    moon.style.top= value*3 + 'px'
    mountain1.style.top =value*2 + 'px'
    mountain2.style.top =value*1.5 + 'px'
    river.style.top =value + 'px'
    boat.style.top =value + 'px'
    boat.style.left =value*3 + 'px'
    hossam.style.fontSize= value+'px'
    if(scrollY>=67){
        hossam.style.fontSize=67+'px';
        hossam.style.position='fixed';
    }
    if(scrollY>=478){
        hossam.style.display='none'
    }else{
        hossam.style.display='block'
    }
    if(scrollY>=127){
        container.style.backgroundImage ='linear-gradient(#376281,#10001f)'
    }else{
       container.style.backgroundImage ='linear-gradient(#200016,#10001f)'
    }
})

window.onscroll=function(){
    if(scrollY>=60){
        btn.style.display='block'
    }else{
        btn.style.display='none'

    }
}
btn.addEventListener('click',()=>{
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
})
