var wideCarousel = document.getElementsByClassName('wideCarousel')[0];
var circleArrow = document.getElementsByClassName('circleArrow')[0];

var carNum = 1;
circleArrow.addEventListener('click',function(){
  carFun();
});

function carFun(){
  if(carNum % 3 === 0){
    wideCarousel.style.left = '0vw'
  }
  if(carNum % 3 === 1){;
    wideCarousel.style.left = '-20vw'
  }
  if(carNum % 3 === 2){
    wideCarousel.style.left = '-40vw'
  }
  carNum++;
}
var yScrol = 1;
window.onscroll = function(){
  if(yScrol === 1){

    if(scrollY>0 && scrollY<99){
      carFun();
      console.log(1);
    }
    if(scrollY>100 && scrollY <200){
      carFun();
      console.log(2);
    }
    if(scrollY>200){
      carFun();
      console.log(3);
    }
    setTimeout(function(){
      yScrol=1;
      console.log('aa');
    },1000)
  }
  yScrol = 0;
}
