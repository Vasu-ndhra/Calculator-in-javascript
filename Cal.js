let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
// var screenvalue = "";
for (var item of buttons) {
  item.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log(buttonText);
    switch (buttonText) {
      case "+":
        screen.value += buttonText.toString();
        break;
      case "-":
        screen.value += buttonText.toString();
        break;
      case "*":
        screen.value += buttonText.toString();
        break;
      case "/":
        screen.value += buttonText.toString();
        break;
      case "=":
        screen.value = eval(screen.value);
        break;
      case "C":
        screen.value = "";
        break;
      default:
        screen.value += buttonText.toString();
    }
  });
}
