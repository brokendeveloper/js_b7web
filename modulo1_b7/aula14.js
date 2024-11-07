// diferença == e ===

// == serve para valores "iguais", mas não é capaz de diferenciar os tipos
// ex
let idade = 10;
let idadeString = "10";

if(idade == idadeString){
    console.log("==");
}

// === siginifica exatamente igual (até no tipo)
let idade2 = 12;
let idadeString2 = "12";
if(idade2 === idadeString2){
    console.log("===");
}else{
    console.log("os tipos são diferentes.")
}