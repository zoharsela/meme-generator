'use strict'

var gCanvas;
var gCtx;
var gCurrPosX;
var gCurrPosy;
var gFocusTxt = true;
var gIsFocus = false;



function renderCanvas(){
    gCanvas = document.querySelector('.meme-canvas');
    gCtx = gCanvas.getContext('2d');
    if(!gIsFocus) drawFocusRect();
    else gIsFocus = false;
    canvasImg();
    renderTxt();
}

function canvasImg(){
    let imgId = getSelectedImg();
    let elImg = document.querySelector(`#img-num-${imgId}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
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
    gCtx.setLineDash([]);
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = line.outlineColor;
    gCtx.fillStyle = line.fillColor;
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
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme.jpg'
}

function drawFocusRect(){
    var meme = getMeme();
    if(gFocusTxt){
        if(meme.lines.length === 0) return;
        var line = meme.lines[meme.selectedLineIdx];
        var posX = line.positionX;
        var posY = line.positionY;
        gCtx.beginPath();
        gCtx.rect(posX - 80, posY - 70, 300, 50);
        gCtx.setLineDash([4, 4]);
        gCtx.strokeStyle = 'black';
        gCtx.stroke();
    }
}



