let htmlInputText = document.querySelector('.inputText');

function encryptText() {
  let decodedText = document.querySelector('.decodedText');
  let inputText = htmlInputText.value;
  let encryptedText = "";
  
  // if (inputText == []) {
  //   return false;
  // }

  inputText = [...inputText];

  for(let i = 0; i < inputText.length; i++){
    if ((inputText[i] == inputText[i].toLowerCase()) || inputText[i] != " ") {
      if (inputText[i] == 'a') {
        encryptedText += 'ai';
      } else if (inputText[i] == 'e') {
        encryptedText += 'enter';
      } else if (inputText[i] == 'i') {
        encryptedText += 'imes';
      } else if (inputText[i] == 'o') {
        encryptedText += 'ober';
      } else if (inputText[i] == 'u') {
        encryptedText += 'ufat';
      } else {
        encryptedText += inputText[i];
      }
    } else {
        alert("Não é permitido letras maiúsculas ou caracteres especiais!");
        return;
    }
  }

  decodedText.innerHTML = encryptedText;
  inputText.value = "";
  inputText.focus();

  // decodedText.style.textAlign = "start";
  // btnCopy.style.display = "flex";
  document.querySelector(".sidebar-empty-state").style.display = "none";
  document.querySelector(".sidebar-content").style.display = "block";
}