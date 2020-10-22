'use strice';

// var gKeywords = {'Funny': 5, 'Animal': 3, 'Movie': 1, 'Political': 3, 'Celebrity': 5}
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['Political', 'Celebrity'] },
    { id: 2, url: 'img/2.jpg', keywords: ['Animal', 'Funny'] },
    { id: 3, url: 'img/3.jpg', keywords: ['Animal'] },
    { id: 4, url: 'img/4.jpg', keywords: ['Animal', 'Funny'] },
    { id: 5, url: 'img/5.jpg', keywords: ['Celebrity', 'Funny'] },
    { id: 6, url: 'img/6.jpg', keywords: ['Political'] },
    { id: 7, url: 'img/7.jpg', keywords: ['Funny', 'Celebrity'] },
    { id: 8, url: 'img/8.jpg', keywords: ['Movie', 'Celebrity'] },
    { id: 9, url: 'img/9.jpg', keywords: ['Funny'] },
    { id: 10, url: 'img/10.jpg',keywords:['Political', 'Celebrity']}
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'can’t get fired',
            size: 20,
            align: 'center',
            font: 'Impact',
            outLineColor: 'black',
            fillColor: 'white',
            positionX: 150,
            positionY: 17
        },
        {
            txt: 'if you dont have a job',
            size: 20,
            align: 'center',
            font: 'Impact',
            outLineColor: 'black',
            fillColor: 'white',
            positionX: 150,
            positionY: 145
        },
    ]
}

function updateMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function getMeme() {
    return gMeme;
}


function getImgs() {
    return gImgs;
}

function getSelectedImg() {
    return gMeme.selectedImgId;
}

function editMeme(key, value) {
    if (gMeme.lines.length === 0) return;
    let lineIdx = gMeme.selectedLineIdx;
    gMeme.lines[lineIdx][key] = value;
}

function moveLine(value){
    if (gMeme.lines.length === 0) return;
    let lineIdx = gMeme.selectedLineIdx;
    gMeme.lines[lineIdx].positionY += value;
}

function changeSize(fontSize) {
        if (gMeme.lines.length === 0) return;
        let lineIdx = gMeme.selectedLineIdx;
        gMeme.lines[lineIdx].size += fontSize;
        console.log(gMeme.lines[lineIdx].size);
}

function switchLines(){
    if(gMeme.lines.length === 0) return;
    if(gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx++;
}

function addLine(){
var line = {
    txt: 'can’t get fired',
    size: 20,
    align: 'center',
    font: 'Impact',
    outLineColor: 'black',
    fillColor: 'white',
    positionX: 150,
    positionY: 80
}
    gMeme.lines.push(line);
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function deleteLine(){
    if(gMeme.lines.length === 0) return;
    let lineIdx = gMeme.selectedLineIdx;
    gMeme.selectedLineIdx = 0;
    gMeme.lines.splice(lineIdx, 1);
}


