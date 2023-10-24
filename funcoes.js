function allowDrop(e) {
    e = e||window.event;

    e.preventDefault();
}

function drag(e) {
    e = e||window.event;

    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e = e||window.event;
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

var area1 = document.getElementById("drop-area-1");
var area2 = document.getElementById("drop-area-2");
var draggable = document.getElementById("draggable-item");

draggable.ondragstart = drag;
area1.ondrop = drop;
area1.ondragover = allowDrop;

area2.ondrop = drop;
area2.ondragover = allowDrop;