let container = document.querySelector('.container');
let itemArray = [];
let rowArray = [];
let rowNum = -1;

for (let itemNum = 0; itemNum <= 255; itemNum++) {
    if (itemNum % 16 == 0) {
        rowNum++;
        rowArray[rowNum] = document.createElement("div");
        rowArray[rowNum].setAttribute("class", `row row-${rowNum + 1}`);
        container.appendChild(rowArray[rowNum]);
    }
    itemArray[itemNum] = document.createElement("div");
    itemArray[itemNum].setAttribute("class", `item item-${itemNum + 1}`);
    rowArray[rowNum].appendChild(itemArray[itemNum]);
}