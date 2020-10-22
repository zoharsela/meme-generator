'use strice'

function onInit(){
 onRenderGallery();
}

function onRenderGallery(){
    var imgs = getImgs();
    var strHtml = '';
    imgs.forEach(img => {
        strHtml += `<img src="${img.url}" id="img-num-${img.id}" onclick="onRenderCanvas(${img.id})">`
    });
    document.querySelector('.gallery-container').innerHTML = strHtml;
}

function onRenderCanvas(imgId){
    updateMemeImg(imgId);
    renderCanvas();
    document.querySelector('.gallery-container').style.display = 'none';
    // document.querySelector('.search-container').style.display = 'none';
    document.querySelector('.canvas-container').style.display = 'grid';
}

function toggleNav() {
    document.body.classList.toggle('menu-open');
    let img = document.querySelector('.nav-img').src;
         if (img.indexOf('hamburger.png')!=-1) {
             document.querySelector('.nav-img').src  = '../icon/x.png';
         }
          else {
            document.querySelector('.nav-img').src = '../icon/hamburger.png';
        }
 
 }

 function toggleGallery(){
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.gallery-container').style.display = 'grid';
    document.querySelector('.search-container').style.display = 'grid';
 }


