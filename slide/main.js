let $imges=$('#slides img')
let $slide = $('#slides')
$slide.css({transform:'translateX(-920px)'})
setTimeout(function(){
    $slide.css({transition:'all 0.8s' })
},0)
//makeFake
let firstImg = $imges.eq(0).clone(true)
let lastImg=$imges.eq($imges.length-1).clone(true)
console.log($slide)
console.log($imges)
console.log(firstImg)
console.log(lastImg)
$slide.append(firstImg)
$slide.prepend(lastImg)
//初始化
let current=0
let index
let $lies=$('li')
$lies.eq(0).addClass('act')
console.log
console.log($lies)
for(let i=0;i<$lies.length;i++)
{
    $lies.eq(i).on('click',function(e){
        $li=$(e.currentTarget)
        index=$li.index()
        goToSlide(index)
    })
}
//轮播
function goToSlide(index){
    if(index > $lies.length-1){
        index = 0
      }else if(index <0){
        index = $lies.length - 1
      }
    if(index===$lies.length-1&&current===0){
        $lies.eq(index).siblings().removeClass('act')
        $lies.eq(index).addClass('act')
        $slide.css({transform:'translateX(0px)'})
        .one('transitionend',function(){
            $slide.hide().offset()
            $slide.css({transform:`translateX(${-($lies.length)*920}px)`}).show()
            console.log(2)
        })
    } 
    else if(index===0&&current===$lies.length-1){
        $lies.eq(index).siblings().removeClass('act')
        $lies.eq(index).addClass('act')
        $slide.css({transform:`translateX(${-($lies.length+1)*920}px)`})
        .one('transitionend',function(){
            $slide.hide().offset()
            $slide.css({transform:`translateX(${-(index+1)*920}px)`}).show()
            console.log(1)
        })
    }
    else{
        $slide.css({transform:`translateX(${- (index+1) * 920}px)`})
        $lies.eq(index).siblings().removeClass('act')
        $lies.eq(index).addClass('act')
        console.log(3)
      }
      current=index
}
//shizhong
let timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
  $('#gallery').on('mouseenter', function(){
    window.clearInterval(timer)
  }).on('mouseleave', function(){
    timer = setInterval(function(){
      goToSlide(current+1)
    },2000)
  })