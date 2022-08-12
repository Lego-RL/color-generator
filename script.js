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

function resize() {
    var color_boxes = document.querySelectorAll(".singular-color");
    var slider = document.getElementById("color_range");

    if (slider.value > color_boxes.length) {
        for (var i = 0; i < slider.value - color_boxes.length; i++) {
            create_color_box();
        }
    } else if (slider.value < color_boxes.length) {
        for (var i = 0; i < color_boxes.length - slider.value; i++) {
            color_boxes[color_boxes.length - 1].remove();
        }
    }
}

function create_color_box() {

    console.log("run create color box")

    var singular_color = document.createElement("div");
    singular_color.className = "singular-color";

    var color_box = document.createElement("div");
    color_box.className = "color-box";

    var hex_code = document.createElement("h3");
    hex_code.className = "hex-code";

    singular_color.appendChild(color_box);
    singular_color.appendChild(hex_code);

    setColor(color_box);

    color_box.onclick = () => {
        setColor(color_box);
    };
    document.getElementById("color-container").appendChild(singular_color);
}

window.onload = () => {

    var slider = document.getElementById("color_range");
    var output = document.getElementById("num_colors");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        resize();
    }

    var color_boxes = document.querySelectorAll(".color-box");

    color_boxes.forEach((color_box) => {
        color_box.onclick = () => {
            setColor(color_box);
        };
    });

    setRandomColors();
}
