function totalPalavras() {
  let text = document.querySelector("#textarea").value;
  if (text == "") {
    document.querySelector("#resultado").innerText = "Digite algo!";
  } else {
    let results = text.split(" ").length;
    let termo = results > 1 ? "palavras" : "palavra";
    document.getElementById(
      "resultado"
    ).innerText = `Você digitou ${results} ${termo}`;
  }
}

function clear() {
  let text = document.querySelector("#textarea");
  text.value = "";
  let msg = document.querySelector("#resultado");
  msg.innerText = "";
}

let btnCalcular = document.querySelector("#btn-calcular");
btnCalcular.addEventListener("click", () => {
  totalPalavras();
});

let textArea = document.querySelector("#textarea");
textArea.addEventListener("focus", () => {
  clear();
});
