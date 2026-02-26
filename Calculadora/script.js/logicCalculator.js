const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let lastResult = null;

buttons.forEach((btn) => {
  const value = btn.getAttribute("data-value");
  const action = btn.getAttribute("data-action");

  btn.addEventListener("click", () => {
    if (action === "clear") {
      current = "";
      display.value = "";
      return;
    }

    if (action === "delete") {
      current = current.slice(0, -1);
      display.value = current;
      return;
    }

    if (action === "equals") {
      try {
        if (!current) return;
        const result = eval(current); // para un proyecto real, conviene reemplazar eval
        lastResult = result;
        display.value = result;
        current = String(result);
      } catch {
        display.value = "Error";
        current = "";
      }
      return;
    }

    // Números y operadores
    current += value;
    display.value = current;
  });
});