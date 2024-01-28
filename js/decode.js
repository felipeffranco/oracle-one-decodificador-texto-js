function encrypt() {
  let textInput = document.querySelector("#textInput").value;
  let textOutput = document.querySelector("#textOutput");
  var newOutput = "";

  if (textInput == "") {
    return false;
  }

  for (var i = 0; i < textInput.length; i++) {
    if ((textInput[i] != textInput[i].toUpperCase()) || textInput[i] == " ") {
      if (textInput[i] == 'a') {
        newOutput += 'ai';
      } else if (textInput[i] == 'e') {
        newOutput += 'enter';
      } else if (textInput[i] == 'i') {
        newOutput += 'imes';
      } else if (textInput[i] == 'o') {
        newOutput += 'ober';
      } else if (textInput[i] == 'u') {
        newOutput += 'ufat';
      } else {
        newOutput += textInput[i];
      }
    } else {
      alert("Não é permitido letras maiúsculas ou caracteres especiais!");
      return;
    }
  }

  textOutput.innerHTML = newOutput;
  textInput.value = "";

  document.querySelector(".sidebar-empty-state").style.display = "none";
  document.querySelector(".sidebar-content").style.display = "flex";

}

function decrypt() {
  let textInput = document.querySelector("#textInput").value;
  let textOutput = document.querySelector("#textOutput");
  var newOutput = "";

  if (textInput == "") {
    return false;
  }

  for (var i = 0; i < textInput.length; i++) {
    if ((textInput[i] != textInput[i].toUpperCase()) || textInput[i] == " ") {
      if (textInput[i] == 'a' && i < textInput.length - 1) {
        newOutput += 'a';
        if (textInput[i + 1] == "i") {
          i++;
        }
      } else if (textInput[i] == 'e' && i < textInput.length - 4) {
        newOutput += 'e';
        if (textInput[i + 1] == "n" && textInput[i + 2] == "t" && textInput[i + 3] == "e" && textInput[i + 4] == "r") {
          i += 4;
        }
      } else if (textInput[i] == 'i' && i < textInput.length - 3) {
        newOutput += 'i';
        if (textInput[i + 1] == "m" && textInput[i + 2] == "e" && textInput[i + 3] == "s") {
          i += 3;
        }
      } else if (textInput[i] == 'o' && i < textInput.length - 3) {
        newOutput += 'o';
        if (textInput[i + 1] == "b" && textInput[i + 2] == "e" && textInput[i + 3] == "r") {
          i += 3;
        }
      } else if (textInput[i] == 'u' && i < textInput.length - 3) {
        newOutput += 'u';
        if (textInput[i + 1] == "f" && textInput[i + 2] == "a" && textInput[i + 3] == "t") {
          i += 3;
        }
      } else {
        newOutput += textInput[i];
      }
    } else {
      alert("Não é permitido letras maiúsculas ou caracteres especiais!");
      return;
    }
  }

  textOutput.innerHTML = newOutput;
  textInput.value = "";

  document.querySelector(".sidebar-empty-state").style.display = "none";
  document.querySelector(".sidebar-content").style.display = "flex";
}

function copyText() {
  var copyThisText = textOutput.innerHTML;

  navigator.clipboard.writeText(copyThisText)
    .then(
      function () {
        alert("Texto copiado com sucesso!"); 
      }
    )
    .catch(
      function () {
        alert("Erro ao copiar o texto, por favor tente novamente"); 
      }
    );
}
