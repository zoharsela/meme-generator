'use strict'

var gCanvas;
var gCtx;
var gCurrPosX;
var gCurrPosy;



function renderCanvas(){
    gCanvas = document.querySelector('.meme-canvas');
    gCtx = gCanvas.getContext('2d');
    canvasImg();
    renderTxt()
}

function canvasImg(){
    let imgId = getSelectedImg();
    let elImg = document.querySelector(`#img-num-${imgId}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function onChangeTxt(txt){
    editText('txt', txt);
    renderCanvas();
}

function renderTxt(){
    let meme = getMeme();
    let lines = meme.lines;
    if(lines.length === 0) return;
    lines.forEach(line => drawTxt(line))
    let selectedLine = meme.lines[meme.selectedLineIdx];
    document.querySelector('.input-txt').value = selectedLine.txt;
}

function drawTxt(line){
    gCtx.setLineDash([]);
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = line.outlineColor;
    gCtx.fillStyle = line.fillColor;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.positionX, line.positionY);
    gCtx.strokeText(line.txt, line.positionX, line.positionY);
}

function onChangeSize(num){
    changeSize(num);
    renderCanvas();
}

