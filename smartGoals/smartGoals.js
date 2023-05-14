const sdgImgDirs = [
    'sdgNum1.jpg',
    'sdgNum3.jpg',
    'sdgNum4.jpg',
    'sdgNum6.jpg',
    'sdgNum7.jpg',
    'sdgNum8.jpg',
    'sdgNum11.jpg',
    'sdgNum12.jpg',
    'sdgNum13.jpg',
    'sdgNum17.jpg'
]

const carousleElem = document.querySelector("#carrousle")

let index = 0

function loop(num, min, max) {
    num = num % max
    if(num < min) num = max - 1
    return num
}

function rightArrowActivation() {
    index++;
    index = loop(index, 0, sdgImgDirs.length)
    displayImg()
}

function leftArrowActivation() {
    index--;
    index = loop(index, 0, sdgImgDirs.length)
    displayImg()
}

function displayImg() {
    console.log(index)
    carousleElem.src = '../imgs/' + sdgImgDirs[index]
}