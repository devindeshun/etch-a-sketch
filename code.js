let container = document.querySelector('.container');
let resetButton = document.querySelector('.reset-button');
let newGridButton = document.querySelector('.new-grid-button');
let gridSizeNumber = document.querySelector('.grid-size-number');
let itemArray = [];
let rowArray = [];
let rowNum = -1;

for (let itemNum = 0; itemNum < 256; itemNum++) {
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

for (let item in itemArray) {
    itemArray[item].style.opacity = .1;
    itemArray[item].addEventListener("mouseover", () => {
        // itemArray[item].classList.add("mouseover");
        itemArray[item].style.backgroundColor = getRandomColor();
        itemArray[item].style.opacity = Number(itemArray[item].style.opacity) + .1;
    });
}

resetButton.addEventListener('click', () => {
    for (let item in itemArray) {
        itemArray[item].classList.remove('mouseover');
    }
});

newGridButton.addEventListener('click', () => {
    let gridSize = gridSizeNumber.value;
    if (gridSize >= 1 && gridSize <= 100) {
        let gridSizeSquared = gridSize**2;
        rowNum = -1;
        container.innerHTML = '';
        for (let itemNum = 0; itemNum < gridSizeSquared; itemNum++) {
            if (itemNum % gridSize == 0) {
                rowNum++;
                rowArray[rowNum] = document.createElement("div");
                rowArray[rowNum].setAttribute("class", `row row-${rowNum + 1}`);
                container.appendChild(rowArray[rowNum]);
            }
        itemArray[itemNum] = document.createElement("div");
        itemArray[itemNum].setAttribute("class", `item item-${itemNum + 1}`);
        rowArray[rowNum].appendChild(itemArray[itemNum]);
    };
};

for (let item in itemArray) {
    itemArray[item].style.opacity = .1;
    itemArray[item].addEventListener("mouseover", () => {
        // itemArray[item].classList.add("mouseover");
        itemArray[item].style.backgroundColor = getRandomColor();
        itemArray[item].style.opacity = Number(itemArray[item].style.opacity) + .1;
    });
}
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}