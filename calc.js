for (let i = 0; i < document.querySelectorAll("#keys>div").length; i++) {
  document.querySelectorAll("#keys>div")[i].addEventListener("click", cal);
}

let storage = "";

function cal(event) {
  let keytext = event.target.innerText;
  if (keytext == "C") {
    document.querySelector("#display").innerText = "";
    storage = "";
  } else if (keytext == "=") {
    document.querySelector("#display").innerText = eval(storage);
    if (document.querySelector("#display").innerText == "undefined") {
      document.querySelector("#display").innerText = "";
    }
  } else {
    storage = storage + keytext;
    document.querySelector("#display").innerText = storage;
  }
}
