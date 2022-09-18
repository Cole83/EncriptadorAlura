const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];

function Encriptar(TextoEncriptado){
  for (let i = 0 ; i < matrizCodigo.length; i++){
     if (TextoEncriptado.includes(matrizCodigo[i][0])){
       TextoEncriptado = TextoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
     }
  }
  return TextoEncriptado;
}

function Desencriptar(TextoDesencriptado){
  for (let i = 0 ; i < matrizCodigo.length; i++){
    if (TextoDesencriptado.includes(matrizCodigo[i][1])){
      TextoDesencriptado = TextoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
  }
  return TextoDesencriptado;
}

function Valida(text) {
    text = String(text).trim();
    const regxs = {
      "lower": /^[a-z '\n']+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    }
   
    if (regxs.lower.test(text)) return '0';
    if (regxs.upper.test(text)) return '1';
    if (regxs.upperLower.test(text)) return '2';
    return -1;
}
function Mostrar(cadena){
  document.getElementById("text2").value=cadena;
  document.getElementById("text2").style.backgroundImage = "none";
  document.getElementById("mensaje").style.display="none";
  document.getElementById("cp").style.display="block";
  document.getElementById("text1").value="";
}
function BtnEntrada(){
  let cadena=document.getElementById("text1").value;
  if(cadena===""){ 
    alert("Introduzca texto valido.");
  }else if(Valida(cadena)==0){
    cadena=Encriptar(cadena);
    Mostrar(cadena);
  }else alert("Introduzca texto valido.\nSolo admite minusculas y sin acentos");
}

function BtnDesencriptar(){
  let cadena=document.getElementById("text1").value;
  if(cadena===""){ 
    alert("Introduzca texto valido.");
  }else if(Valida(cadena)==0){
    cadena=Desencriptar(cadena);
    Mostrar(cadena);
  }else alert("Introduzca texto valido.\nSolo admite minusculas y sin acentos");
}

function BtnCopiar(){
  let contenido=document.getElementById("text2").value;

  navigator.clipboard.writeText(contenido); 
  alert("Texto copiado al portapapeles");
  if(window.innerWidth>768)
  document.getElementById("text2").style.backgroundImage = "url(img/Muñeco.png)";
  document.getElementById("text2").value="";
  document.getElementById("cp").style.display="none";
  document.getElementById("mensaje").style.display="block";
}

