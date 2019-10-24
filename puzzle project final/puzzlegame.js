function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}
function swapNumbers(cell1, cell2) {
  var temp = document.getElementById(cell1).innerHTML;
  document.getElementById(cell1).innerHTML = document.getElementById(cell2).innerHTML;
  document.getElementById(cell2).innerHTML = temp;
}

function shuffle() {

  for (var row = 1; row <= 3; row++) {
    for (var column = 1; column <= 3; column++) {

      var row2 = Math.floor(Math.random() * 3 + 1);
      var column2 = Math.floor(Math.random() * 3 + 1);

      swapTiles("cell" + row + column, "cell" + row2 + column2);
      swapNumbers("cell" + row + column, "cell" + row2 + column2);


    }
  }
}

function puzzleCheck() {
  var cnt = 1;
  var flag = false;
  for (let row = 1; row < 4; row++) {
    for (let col = 1; col < 4; col++) {
      var left = document.getElementById("cell" + row + col).getElementsByTagName("h1")[0].id
      var right = ('a' + cnt);
      console.log(row, col);
      if (left == right) {
        flag = true;
        cnt++;
      }
      else {
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    setTimeout(() => { alert("Victory\nReloading Page"); location.reload(); }, 1000);
  }
}

function clickTile(row, column) {
  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className
  if (tile != "tile9") {
    if (column < 3) {
      if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + row + (column + 1));
        swapNumbers("cell" + row + column, "cell" + row + (column + 1));
        return;
      }
    }
    if (column > 1) {
      if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + row + (column - 1));
        swapNumbers("cell" + row + column, "cell" + row + (column - 1));
        return;
      }
    }
    if (row > 1) {
      if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + (row - 1) + column);
        swapNumbers("cell" + row + column, "cell" + (row - 1) + column);
        return;
      }
    }

    if (row < 3) {
      if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + (row + 1) + column);
        swapNumbers("cell" + row + column, "cell" + (row + 1) + column);
        return;
      }
    }
  }
}
