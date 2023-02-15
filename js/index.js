

let pages = document.querySelector('.pages');
let leaves = document.querySelector('.leaves');
// get all element id of product
let productIds = document.querySelectorAll('.carousel-item');
let products = [];
productIds.forEach((product)=>{products.push(product.id)})

// get the id and index of the active carousel item
let index = 0;
document.querySelector('.carousel').addEventListener('click',changeView);

function changeView(){
  let activeIndicator = document.querySelector('.carousel-indicators .active');
  index = activeIndicator.getAttribute('data-bs-slide-to')

  products.forEach((e)=>{
    pages.classList.remove(e);
    leaves.classList.remove(e+'View');
  })
  leaves.classList.add(productIds[index].id+'View');
}
// go to view
let p1 = document.querySelectorAll('.productView');
let p2 = document.querySelectorAll('.productInfo');
let p3 = document.querySelectorAll('.productMenu');
let row = 1;

function goTo(e){
  switch(e){
    case 1:
      p1[index].scrollIntoView();
      pages.classList.remove('view2','view3');
      pages.classList.add('view1');
      break;
    case 2:
      p2[index].scrollIntoView();
      pages.classList.remove('view1','view3');
      pages.classList.add('view2');
      break;
    case 3:
      p3[index].scrollIntoView();
      pages.classList.remove('view2','view1');
      pages.classList.add('view3');
      break;
  }
  row = e;
}


window.onwheel = e => {

  if(e.deltaY >= 0){
      switch(row){
        case 1:
          goTo(2);break;
        case 2:
          goTo(3);break;
        case 3:
          goTo(3);break;
      }
  } 
  else {

    switch(row){
      case 3:
        goTo(2);break;
      case 2:
        goTo(1);break;
      case 1:
        goTo(1);break;
    }

  }
  console.log(row);
}
let touchstartY = 0
let touchendY = 0
    
function checkDirection() {
  if (touchendY > touchstartY){
    switch(row){
      case 1:
        goTo(2);break;
      case 2:
        goTo(3);break;
      case 3:
        goTo(3);break;
    }
  };
  if (touchendY < touchstartY){
    switch(row){
      case 3:
        goTo(2);break;
      case 2:
        goTo(1);break;
      case 1:
        goTo(1);break;
    }
  }
}

document.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenX
  checkDirection()
})



