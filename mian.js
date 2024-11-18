let diplay = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.id === "=") {
            display.value = eval(diplay.value);
        }
        else if (btn.id === "ac") {
            display.value = "";
        }
        else if (btn.id === "de") {
            diplay.value = diplay.value.toString().slice(0, -1);
        }
        else {
            display.value += btn.id;
        }
    })
});