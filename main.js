let mes = 2;
switch (mes){
    case 1:
        console.log("enero");
        break;
    case 2:
        console.log("febrero");
        break;
    case 3:
        console.log("marzo");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("mayo");
        break;
    case 6:
        console.log("junio");
        break;
    case 7:
        console.log("julio");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("septiembre");
        break;
    case 10:
        console.log("octubre");
        break;
    case 11:
        console.log("noviembre");
        break;
    case 12:
        console.log("diciembre");
        break;

    default:
        console.error("El año tiene 12 meses");
        break;

}

function number(str) {
    var numero;
    switch (str) {
      case "0":
        numero = 0;
        break;
      case "1":
        numero = 1;
        break;
      case "2":
        numero = 2;
        break;
      case "3":
        numero = 3;
        break;
      case "4":
        numero = 4;
        break;
      case "5":
        numero = 5;
        break;
      default:
        numero = NaN;
    }
    return numero;
  }
  
  var strNumero = "5";
  var numero = number(strNumero);
  console.log(numero);