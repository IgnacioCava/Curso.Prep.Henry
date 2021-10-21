// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var array=Object.entries(objeto);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj={};
  for(var i=0;i<string.length;i++){
    if(obj[string.charAt(i)]===undefined){
      obj[string.charAt(i)]=1;
    }
    else{
      obj[string.charAt(i)]=obj[string.charAt(i)]+1;
    }
  }
  

  return obj;
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cap="";
  var min="";
  for(var i=0;i<s.length;i++){
    if(s.charAt(i)===s.charAt(i).toUpperCase()){
      cap=cap+s.charAt(i);
    }
    if(s.charAt(i)===s.charAt(i).toLowerCase()){
      min=min+s.charAt(i);
    }
  }
  return cap+min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var partes=[];
  partes=str.split(' ');/*Almacena cada palabra individual del string en un array*/

  for(var P=0;P<partes.length;P++){
    partes[P]=partes[P].split('').reverse().join('');/*Almacena cada LETRA individual de cada palabra string en un array, invierte el array y luego reuno las letras en un string*/
  }
  
  return partes.join(' ');/*Reuno todas las palabras, separandolas con un espacio simple*/
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var valor=numero.toString();
  var largo=Math.floor(valor.length/2);
  var cuenta=0;
  for(var i=0;i<largo;i++){
    if(valor.charAt(i)!==valor.charAt(valor.length-i-1)){
        return 'No es capicua';
    }
    else{
      ++cuenta;
    }
    if(cuenta===largo){
      return 'Es capicua';
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var partes=[];
  partes=cadena.split('');
  for(var P=0;P<partes.length;P++){
    if(partes[P]==='a'){
    partes.splice(P, 1);
    }
    if(partes[P]==='b'){
      partes.splice(P, 1);
    }
    if(partes[P]==='c'){
      partes.splice(P, 1);
    }
  }
  //Si no indicaba esos ifs de forma individual, la igualdad no reconocía a la 'b'('a'||'b'||'c') y splice no la borraba, no se por qué.
  return partes.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var temp;
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr.length;j++){
        if(arr[i].toLowerCase().length<arr[j].toLowerCase().length){
          temp=arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
      }//Se espera que 'You' esté primero en el array y 'are' segundo, obligatoriamente, si bien ambos tienen misma .length
    }
    
  }
  /*temp=arr[0];
  arr[0]=arr[1];
  arr[1]=temp;*/
  //Esto pasa en ambos casos de JSX.test.js, donde de espera que 'pera' esté si o si antes que 'papa', si bien miden lo mismo
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var cont=0;
  var interseccion=[];
    for(var i=0;i<arreglo1.length;i++){
      for(var j=0;j<arreglo2.length;j++){
        if(arreglo1[i]===arreglo2[j]){
          interseccion[cont]=arreglo1[i];
          ++cont;
        }
      }
    }
  
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

