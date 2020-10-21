'use strice';

// var gKeywords = {'Animal': 12,'Funny': 1}
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'can’t get fired',
            size: 70,
            align: 'center',
            font: 'Impact',
            outLineColor: 'black',
            fillColor: 'white',
            positionX: 110,
            positionY: 15
        },
        {
            txt: 'if you dont have a job',
            size: 70,
            align: 'center',
            font: 'Impact',
            outLineColor: 'black',
            fillColor: 'white',
            positionX: 110,
            positionY: 130
        }
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

function editText(key, value) {
    if (gMeme.lines.length === 0) return;
    let lineIdx = gMeme.selectedLineIdx;
    gMeme.lines[lineIdx][key] = value;
}

function changeSize(fontSize){
    console.log('1');
    if(gMeme.length === 0) return;
    let lineIdx = gMeme.selectedLineIdx;
    gMeme.lines[lineIdx].size += fontSize;
    console.log(gMeme.lines[lineIdx].size);
}