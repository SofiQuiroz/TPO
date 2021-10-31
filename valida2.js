window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value ==''){
    alert('El campo nombre no puede estar vacío.');
    return false
  }
  return true;
}

function valida_telefono() {
var elemento = document.getElementById('tel');
  if (isNaN(elemento.value)){
    alert('El campo teléfono debe ser un número.');
    return false
  }
  return true;
}

function valida_check() {
var elem1 = document.getElementById('check1');
var elem2 = document.getElementById('check2');
var elem3 = document.getElementById('check3');
var elem4 = document.getElementById('check4');
if (!elem1.checked && !elem2.checked && !elem3.checked && !elem4.checked){
  alert('Debe seleccionar al menos uno.');
  return false;
}
return true;
}

function validate(e){
  if(valida_nombre() && valida_telefono() && valida_check() && confirm('Desea enviar?')){
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}