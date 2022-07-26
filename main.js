var imgList  = Array.from(document.querySelectorAll('.better img'))
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')
var closeBtn = document.getElementById('close')
var indexImg
var lightBoxContainer=document.getElementById('lightBoxContainer') 
var lightBoxItem=document.getElementById('lightBoxItem')
for (let i = 0; i <imgList.length; i++) {
    var imglist=document.querySelectorAll('.container')
    imgList[i].addEventListener('click',function(e){
        lightBoxContainer.style.display='flex'
        var Imgsrc= e.target.src
         indexImg = imgList.indexOf(e.target)
        console.log(indexImg)
        lightBoxItem.style.backgroundImage=`url(${Imgsrc})`
    })
    }
    function NextSlider(){
        indexImg = indexImg + 1
        if(indexImg >= imgList.length){
            indexImg = 0;
        }
        var nextImg= imgList[indexImg].src
        lightBoxItem.style.backgroundImage=`url(${nextImg})`
        console.log(nextImg)
    }
    nextBtn.addEventListener('click' ,function(){
        NextSlider()
    })
    function prevSlider(){
        if( indexImg== 0 ){
            indexImg = imgList.length -1;
        }else{
            indexImg = indexImg - 1;
        }
    
        var nextImg = imgList[indexImg].src
        lightBoxItem.style.backgroundImage = `url(${nextImg})`
    
        console.log(nextImg)
    }
    nextBtn.addEventListener('click' , function(){
        NextSlider();
    })
    prevBtn.addEventListener('click' , function(){
        prevSlider();
    })
    
    closeBtn.addEventListener('click' , function(){
        lightBoxContainer.style.display = 'none'
    })
document.addEventListener('click' , function(e){
    if(lightBoxContainer.style.display != 'none'){
        if(e.target == lightBoxContainer){
            lightBoxContainer.style.display = 'none'
        }

    }
})
document.addEventListener('keydown' , function(e){
    if(lightBoxContainer.style.display == 'flex'){
        if(e.code == 'ArrowRight'){
            NextSlider();
        }
        if(e.code == 'ArrowLeft'){
            prevSlider();
        }
        if(e.code == 'Escape'){
            lightBoxContainer.style.display = 'none'
        }
    }
})



