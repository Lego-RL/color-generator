function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).toString();
}

function setColor(color_box) {
    console.log(color_box)
    textbox = color_box.parentNode.querySelector("h3");
    color = getRandomColor();

    color_box.style.backgroundColor = color;
    textbox.innerHTML = color;
}

function setRandomColors() {
    var color_boxes = document.querySelectorAll(".color-box");
    for (var i = 0; i < color_boxes.length; i++) {
        setColor(color_boxes[i]);
    };
}

window.onload = () => {

    var color_boxes = document.querySelectorAll(".color-box");

    color_boxes.forEach((color_box) => {
        color_box.onclick = () => {
            setColor(color_box);
        };
    });

    setRandomColors();
}
