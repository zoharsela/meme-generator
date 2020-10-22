'use strict'

var gCanvas;
var gCtx;


function renderCanvas(){
    gCanvas = document.querySelector('.meme-canvas');
    gCtx = gCanvas.getContext('2d');
    canvasImg();
    renderTxt();
}

function canvasImg(){
    let imgId = getSelectedImg();
    let elImg = document.querySelector(`#img-num-${imgId}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function onMoveLine(num){
    moveLine(num);
    renderCanvas();
}

function onChangeTxt(txt){
    editMeme('txt', txt);
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
    gCtx.lineWidth = '1';
    gCtx.fillStyle = line.fillColor;
    gCtx.strokeStyle = line.outlineColor;
    gCtx.font = `${line.size}px ${line.font}`; 
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.positionX, line.positionY);
    gCtx.strokeText(line.txt, line.positionX, line.positionY);
}

function onChangeSize(num){
    changeSize(num);
    renderCanvas();
}

function onSwitchLines(){
    switchLines();
    renderCanvas();
}

function onChangeAlign(align){
    editMeme('align', align);
    renderCanvas();
}

function onChangeOutlineColor(value){
    editMeme('outlineColor', value);
    renderCanvas();
}

function onChangeFillColor(value){
    editMeme('fillColor', value);
    renderCanvas();
}

function onChangeFont(font){
    editMeme('font', font);
    renderCanvas();
}

function onAddLine(){
    addLine();
    renderCanvas();
}

function onDeleteLine(){
    deleteLine();
    renderCanvas();
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'meme.jpg';
}



