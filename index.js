const { terminal } = require('terminal-kit');
terminal.fullscreen(true);
terminal.hideCursor(true);

const teminalRows = process.stdout.rows;
const teminalColumns = process.stdout.columns;

const centerRows = Math.floor(teminalRows / 2);
const startColums = 3;

const tree = "*";
const treeSize = 12;
const treeColor = "#8BC34A";

const trank = 'mWm';
const trankSize = 3;
const trankColor = "#996C5B"

const ligth = "o";

const messageColor = "#e2306c";
const messageSpaceTopLn = 2;

const year = new Date().getFullYear();
show();

function show() {

    clear();
    drawTree();
    drawTrunk();
    writeMessage();
    turnOnLights();
    setTimeout(show, random(1200, 3200));
}

function clear() {
    terminal.clear();
}

function drawTree() {

    for (let i = 0; i < treeSize; i++) {

        let leftStarsCount = i;
        let rightStarsCount = i;

        for (let j = 0; j < rightStarsCount; j++) {
            terminal.colorRgbHex(treeColor).moveTo(centerRows + j, startColums + i, tree);
        }

        for (let j = 0; j < leftStarsCount; j++) {
            terminal.colorRgbHex(treeColor).moveTo(centerRows - j, startColums + i, tree);
        }
    }

    moveCurserToEnd();
}

function drawTrunk() {

    for (let j = 0; j < trankSize; j++) {
        terminal.colorRgbHex(trankColor).moveTo(centerRows - Math.floor(trank.length / 2), startColums + treeSize + j, trank);
    }

    moveCurserToEnd();

}

function writeMessage() {

    const message = "MERRY CHRISTMAS";
    const message_2 = `And Lots Of CODE in ${year} `;

    terminal.colorRgbHex(messageColor).moveTo(centerRows - Math.floor(message.length / 2), startColums + trankSize + treeSize + messageSpaceTopLn, message);
    terminal.colorRgbHex(messageColor).moveTo(centerRows - Math.floor(message_2.length / 2), startColums + trankSize + treeSize + messageSpaceTopLn + 1, message_2);

    moveCurserToEnd();
}


function turnOnLights() {

    for (let i = 0; i < treeSize; i++) {

        let leftStarsCount = i;
        let rightStarsCount = i;
        let lightChanse = random(0, 12);

        for (let j = 0; j < rightStarsCount; j++) {
            if (random(0, lightChanse + treeSize - i) == Math.floor((treeSize - i) / 2)) {
                terminal.colorRgbHex(randomeLightColor()).moveTo(centerRows + j, startColums + i, ligth);
            }
        }

        for (let j = 0; j < leftStarsCount; j++) {


            if (random(0, lightChanse + treeSize - i) == Math.floor((treeSize - i) / 2)) {
                terminal.colorRgbHex(randomeLightColor()).moveTo(centerRows - j, startColums + i, ligth);
            }
        }
    }

    moveCurserToEnd();

}

function moveCurserToEnd() {
    terminal.moveTo(teminalRows, teminalColumns, '');
}

function random(low, high) {
    return Math.round(Math.random() * (high - low) + low);
}

function randomeLightColor() {

    let num = random(0, 9);


    switch (num) {
        case 0:
            return "#FFC107";
        case 1:
            return "#45bde7";

        case 2:
            return "#ff6748";

        case 3:
            return "#536DFE";

        case 4:
            return "#FF9800";

        case 5:
            return "#00BCD4";

        case 6:
            return "#ed4658";

        case 7:
            return "#FF4081";

        case 8:
            return "#3acca7";

        case 9:
            return "#a386e9";

    }

}