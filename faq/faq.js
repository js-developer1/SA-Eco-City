const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.height === "0px" || !content.style.height) {
            content.style.height = calculateHeight(this.nextElementSibling) + "px";
        } else {
            content.style.height = "0px";
        }
    });
}

function calculateHeight(parentElem) {
    const childElems = parentElem.children
    let height = 0
    for (const elem of childElems) {
        height += parseInt(elem.getBoundingClientRect().height)
        var style = elem.currentStyle || window.getComputedStyle(elem);
        height += parseInt(style.marginTop)
        height += parseInt(style.marginBottom)
    }
    return height;
}