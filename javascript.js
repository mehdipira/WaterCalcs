function ress(){

  var a = Number(document.getElementById('pins').value);
  var R = Number(document.getElementById('resistance').value);

  var p = 2 * Math.PI * a * R;
  document.getElementById('resistivity').value = p;

}

function areaOfCircle(){

  var D = Number(document.getElementById('diameter').value);
  var R = D/2;
  document.getElementById('radius').value = R;
  var A = (Math.PI * D * D)/4;
  document.getElementById('area').value = A;
}
