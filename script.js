const displays = document.querySelectorAll("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            displays[1].value = eval(displays[0].value);
        } else if (btn.id === "ac") {
            displays.forEach(display => display.value = "");
        } else if (btn.id == "de") {
            displays[0].value = displays[0].value.slice(0, -1);
        } else {
            displays[0].value += btn.id;
        }
    });
});
