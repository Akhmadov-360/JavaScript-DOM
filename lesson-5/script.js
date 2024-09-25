const items = document.querySelectorAll(".box .item");
const lists = document.querySelectorAll(".box .list");
let currentItem = null;

function dragStart(e) {
    if(![...e.target.classList].includes("item")) {
        e.preventDefault();
        return;                
    }
    currentItem = e.target;
    e.target.classList.add("drag-active");
    setTimeout(() => {
        e.target.style.display = "none";
    }, 0);
}

function dragEnd(e) {
    currentItem = null;
    e.target.classList.remove("drag-active");
    e.target.style.display = "flex";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("hovered");
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove("hovered");
}

function drop(e){
    if(![...e.target.classList].includes("list")) {
        e.preventDefault();
        return;
    }
    e.target.classList.remove("hovered");
    e.target.append(currentItem);
    currentItem = null;
}

items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});

lists.forEach((list) => {
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", drop);
});