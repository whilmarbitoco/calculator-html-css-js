const btns = document.querySelectorAll(".btn");
let result = document.querySelector("h3");
let calculate = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      btn.textContent !== "=" &&
      btn.textContent !== "C" &&
      btn.id !== "btn-delete"
    ) {
      calculate += btn.textContent;
      result.innerText += btn.textContent;
    } else if (btn.textContent === "=") {
      result.innerText = eval(calculate);
      calculate = "";
    } else if (btn.textContent === "C") {
      calculate = "";
      result.innerText = "";
    } else if (btn.id === "btn-delete") {
      calculate = calculate.slice(0, -1);
      result.innerText = calculate;
    }
  });
});
