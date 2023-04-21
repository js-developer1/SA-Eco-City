const body = document.querySelector("body");
const navbar = document.querySelector("nav");

function hitbox(obj1, obj2) {
    const { x, y } = obj1
    const { width, height } = obj2
    if (!isInBetween(x, 0, width)) return
    if (!isInBetween(y, 0, height)) return
    return true
}

function isInBetween(num, min, max) {
    return num <= max && num >= min
}

addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event
    if (hitbox({'x': clientX, 'y': clientY}, navbar.getBoundingClientRect())) {
        navbar.style.transform = `translateY(0px)`
    } else {
        navbar.style.transform = `translateY(-70px)`
    }
});