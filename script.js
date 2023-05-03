var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var currId = 0;
var containers = Array.from(document.getElementsByClassName("beniDad"));
containers.forEach((currVal, index, arr) => {
    currVal.style.left = "200%";
});
containers[0].style.left = '0%';
function valt(id) {
    console.log(containers);
    console.log(width);

    containers.forEach((currVal, index, arr) => {
        currVal.style.left = "200%";
    });
    currId = id;
    if (width > 700) {
        containers[id].style.left = "0%";
    }
    else if (width <= 700) {
        containers[id].style.left = "0%";
    }
}

window.addEventListener("resize", (event) => {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(currId);
    if (width > 700) {
        containers[currId].style.left = "0%";
    }
    else if (width <= 700) {
        containers[currId].style.left = "0%";
    }
});

document.addEventListener("ready", function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});