import {validarInput, validarTextArea} from "./validaciones"

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll ("textarea");
const botonDescargarCV = document.querySelectorAll (".title_network_item--descargarCV1")

  inputs.forEach((input) => {
    input.addEventListener("blur", (textarea) => {
    validarInput(input.target);
    });
  });

  textareas.forEach ((textarea) => {
    textarea.addEventListener("blur" , (textarea) => {
     validarTextArea(textarea.target);
    });
  });

botonDescargarCV.addEventListener("click", ()=> {
 window.open('./assets/cv/CV. CVeuro.pdf');
});