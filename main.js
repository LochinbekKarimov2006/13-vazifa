let button1 =document.querySelector('.button1')
let button5 =document.querySelector('.button5')
let button6 =document.querySelector('.button6')
let button7 =document.querySelector('.button7')
let button3=document.querySelectorAll('.button3')
let div1 =document.querySelector('.div-1')
let div2 =document.querySelector('.div-2')
let div3 =document.querySelector('.div-3')
let header=document.querySelector('header')
let main=document.querySelector('main')
let i =document.querySelectorAll('.fa-play')
let play =document.querySelectorAll('.play')
let audio1 =document.querySelector('audio')
let img1 =document.querySelector('.img1')
let img2 =document.querySelector('.img2')
let input1 =document.querySelector('.input1')
audio1.volume=input1.value


let malumod=['doston1','doston2','doston3','doston4','doston5','doston6','doston7',];
let ha =true
button1.addEventListener('click',()=>{
    
    if(ha){
        div1.style.marginTop='0px'
        button1.style.position='static'
        header.style.position='static'
        div3.style.gridTemplateColumns='240px 240px 240px'
        div2.style.marginLeft='0px'
        main.style.p
    }else{
        div1.style.marginTop='-548px'
        div2.style.marginLeft='250px'

        button1.style.position='absolute'
        header.style.position='absolute'
        main.style.width='100%'
        div3.style.gridTemplateColumns='235px 235px 235px 235px '
        
    }
    ha=!ha
});

let l=true
button6.addEventListener('click', ()=>{
    if(l){
        
        play.classList='fa-solid fa-pause'
        audio1.play()
    }else{
        play.classList='fa-solid fa-play'
        audio1.pause()
    }
    l=!l
});
input1.addEventListener('input',(e)=>{
    audio1.volume=e.target.value
})

let malumodlar=(malumod)=>{
    let z=-1
    button7.addEventListener('click',()=>{
        console.log('salomat')
        z+=1
        img2.src=`./imgs/doston ergashov/${malumod[z]}.jpg`
        audio1.src=`./music/doston ergashov/${malumod[z]}.mp3`
        i[z].classList='fa-solid fa-pause'
        audio1.play()
        console.log(z)
        i[z-1].classList='fa-solid fa-play'
        play.classList='fa-solid fa-pause'
    })
    button5.addEventListener('click',()=>{
        z-=1
        img2.src=`./imgs/doston ergashov/${malumod[z]}.jpg`
        play.classList='fa-solid fa-pause'
        audio1.src=`./music/doston ergashov/${malumod[z]}.mp3`
        i[z].classList='fa-solid fa-play'
        i[z+1].classList='fa-solid fa-pause'
        // i[z+1].classList='fa-solid fa-play'
        audio1.play()
        console.log(z)
        
    })
    
}
malumodlar(malumod)
let d=true
button3[0].addEventListener('click',()=>{
    img2.src=`./imgs/doston ergashov/${malumod[0]}.jpg`
    audio1.src=`./music/doston ergashov/${malumod[0]}.mp3`
    i[0].classList='fa-solid fa-play'
    i[1].classList='fa-solid fa-play'
    i[2].classList='fa-solid fa-play'
    i[3].classList='fa-solid fa-play'
    i[4].classList='fa-solid fa-play'
    i[5].classList='fa-solid fa-play'
    i[6].classList='fa-solid fa-play'
    audio1.play()
    if(d){
        i[1].classList='fa-solid fa-pause'
        console.log('salom')
        i[0].classList='fa-solid fa-pause'
        audio1.play()

        
    }else{
        i[1].classList='fa-solid fa-play'
        i[0].classList='fa-solid fa-play'
        audio1.pause()
    }
    d=!d
})
let f=true
button3[1].addEventListener('click',()=>{
    console.log('salom')
    img2.src=`./imgs/doston ergashov/${malumod[1]}.jpg`
    audio1.src=`./music/doston ergashov/${malumod[1]}.mp3`
    i[0].classList='fa-solid fa-play'
                    i[1].classList='fa-solid fa-play'
                    i[2].classList='fa-solid fa-play'
                    i[3].classList='fa-solid fa-play'
                    i[4].classList='fa-solid fa-play'
                    i[5].classList='fa-solid fa-play'
                    i[6].classList='fa-solid fa-play'
    audio1.play()
    if(f){
        i[2].classList='fa-solid fa-pause'
        console.log('salom')
       i[0].classList='fa-solid fa-pause'
        audio1.play()

        
    }else{
        i[2].classList='fa-solid fa-play'
        i[0].classList='fa-solid fa-play'
        audio1.pause()
    }
    f=!f
})
let v=true
button3[2].addEventListener('click',()=>{
    console.log('salom')
    img2.src=`./imgs/doston ergashov/${malumod[2]}.jpg`
    audio1.src=`./music/doston ergashov/${malumod[2]}.mp3`
    i[0].classList='fa-solid fa-play'
    i[1].classList='fa-solid fa-play'
    i[2].classList='fa-solid fa-play'
    i[3].classList='fa-solid fa-play'
    i[4].classList='fa-solid fa-play'
    i[5].classList='fa-solid fa-play'
    i[6].classList='fa-solid fa-play'
    audio1.play()
    if(v){
        i[3].classList='fa-solid fa-pause'
        console.log('salom')
        i[0].classList='fa-solid fa-pause'
        audio1.play()

        
    }else{
        i[3].classList='fa-solid fa-play'
        i[0].classList='fa-solid fa-play'
        audio1.pause()
    }
    v=!v
})
let q=true
button3[3].addEventListener('click',()=>{
    console.log('salom')
    img2.src=`./imgs/doston ergashov/${malumod[3]}.jpg`
    audio1.src=`./music/doston ergashov/${malumod[3]}.mp3`
    i[0].classList='fa-solid fa-play'
                    i[1].classList='fa-solid fa-play'
                    i[2].classList='fa-solid fa-play'
                    i[3].classList='fa-solid fa-play'
                    i[4].classList='fa-solid fa-play'
                    i[5].classList='fa-solid fa-play'
                    i[6].classList='fa-solid fa-play'
    audio1.play()
    let l=true
    if(q){
        i[4].classList='fa-solid fa-pause'
        console.log('salom')
        i[0].classList='fa-solid fa-pause'
        audio1.play()

        
    }else{
        i[4].classList='fa-solid fa-play'
        i[0].classList='fa-solid fa-play'
        audio1.pause()
    }
    q=!q
})          
let c=true
            button3[4].addEventListener('click',()=>{
                console.log('salom')
                img2.src=`./imgs/doston ergashov/${malumod[4]}.jpg`
                audio1.src=`./music/doston ergashov/${malumod[4]}.mp3`
                i[0].classList='fa-solid fa-play'
                    i[1].classList='fa-solid fa-play'
                    i[2].classList='fa-solid fa-play'
                    i[3].classList='fa-solid fa-play'
                    i[4].classList='fa-solid fa-play'
                    i[5].classList='fa-solid fa-play'
                    i[6].classList='fa-solid fa-play'
                audio1.play()
                if(c){
                    i[5].classList='fa-solid fa-pause'
                    console.log('salom')
                   i[0].classList='fa-solid fa-pause'
                    audio1.play()
            
                    
                }else{
                    i[5].classList='fa-solid fa-play'
                    i[0].classList='fa-solid fa-play'
                    audio1.pause()
                }
                c=!c
            })
            let h=true
            button3[5].addEventListener('click',()=>{
                console.log('salom')
                img2.src=`./imgs/doston ergashov/${malumod[5]}.jpg`
                audio1.src=`./music/doston ergashov/${malumod[5]}.mp3`
                i[0].classList='fa-solid fa-play'
                    i[1].classList='fa-solid fa-play'
                    i[2].classList='fa-solid fa-play'
                    i[3].classList='fa-solid fa-play'
                    i[4].classList='fa-solid fa-play'
                    i[5].classList='fa-solid fa-play'
                    i[6].classList='fa-solid fa-play'
                audio1.play()
                if(h){
                    i[6].classList='fa-solid fa-pause'
                    console.log('salom')
                    i[0].classList='fa-solid fa-pause'
                    audio1.play()
            
                    
                }else{
                    i[6].classList='fa-solid fa-play'
                    i[0].classList='fa-solid fa-play'
                    audio1.pause()
                }
                h=!h
            })
            let m=true
            button3[6].addEventListener('click',()=>{
                console.log('salomathgfekrge')
                img2.src=`./imgs/doston ergashov/${malumod[6]}.jpg`
                audio1.src=`./music/doston ergashov/${malumod[6]}.mp3`
                audio1.play()
                if(m){
                    i[0].classList='fa-solid fa-play'
                    i[1].classList='fa-solid fa-play'
                    i[2].classList='fa-solid fa-play'
                    i[3].classList='fa-solid fa-play'
                    i[4].classList='fa-solid fa-play'
                    i[5].classList='fa-solid fa-play'
                    i[6].classList='fa-solid fa-play'

                    i[7].classList='fa-solid fa-pause'
                    i[0].classList='fa-solid fa-pause'
                    audio1.play()
            
                    
                }else{
                    i[7].classList='fa-solid fa-play'
                    i[0].classList='fa-solid fa-play'
                    audio1.pause()
                }
                m=!m
    })