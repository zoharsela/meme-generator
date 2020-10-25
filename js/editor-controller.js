'use strict'

var gCanvas;
var gCtx;
var gFrame = false;

function renderCanvas() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    canvasImg();
    if (!gFrame) drawFrameRect()
    else gFrame = false;
}

function canvasImg() {
    var imgId = getSelectedImg();
    var img = new Image();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        renderTxt();
    };
}

function onMoveLine(num) {
    moveLine(num);
    renderCanvas();
}

function onChangeTxt(txt) {
    editMeme('txt', txt);
    renderCanvas();
}

function renderTxt() {
    let meme = getMeme();
    let lines = meme.lines;
    if (lines.length === 0) return;
    lines.forEach(line => drawTxt(line))
    let selectedLine = meme.lines[meme.selectedLineIdx];
    document.querySelector('.input-txt').value = selectedLine.txt;
}

function drawTxt(line) {
    gCtx.lineWidth = '2';
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillStyle = line.fillColor;
    gCtx.fillText(line.txt, line.positionX, line.positionY);
    gCtx.strokeStyle = line.outlineColor;
    gCtx.stroke();
    gCtx.strokeText(line.txt, line.positionX, line.positionY);
}

function drawFrameRect() {
    var meme = getMeme();
    if (meme.lines.length === 0) return;
    var line = meme.lines[meme.selectedLineIdx];
    var posX = line.positionX;
    var posY = line.positionY;
    gCtx.beginPath();
    gCtx.rect(posX - 120, posY - 17, 250, 30);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}


function onChangeSize(num) {
    changeSize(num);
    renderCanvas();
}

function onSwitchLines() {
    switchLines();
    renderCanvas();
}

function onChangeAlign(align) {
    editMeme('align', align);
    renderCanvas();
}

function onChangeOutlineColor(value) {
    editMeme('outlineColor', value);
    renderCanvas();
}

function onChangeFillColor(value) {
    editMeme('fillColor', value);
    renderCanvas();
}

function onChangeFont(font) {
    editMeme('font', font);
    renderCanvas();
}

function onAddLine() {
    addLine();
    renderCanvas();
}

function onDeleteLine() {
    deleteLine();
    renderCanvas();
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'meme.jpg';
}

function shareCanvas(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {

    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)

        .catch(function (err) {
            console.error(err)
        })
}









