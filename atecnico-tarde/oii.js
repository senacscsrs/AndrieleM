let idade1=18;
let nota=8;

if (idade1 > 16 && nota >= 7){
    console.log("Pode participar do curso");
}
else{
    console.log("n pode participar");
}





//nova

let nome="Andriele";
let idade=15;
let kg=48;
let altura=1.57;
let imc=kg/(altura*altura);
if (imc<18.5){
console.log("abaixo do peso");
}
else if(imc<24.9) {
console.log("peso normal");
}
else if(imc<29.9) {
    console.log("sobrepeso");
}
else if(imc<30){
    console.log("obesidade grau 1 ");
}
else if(imc<35){
    console.log("obesidade grau 2 ");
}
else {
    console.log("obesidade grau 3 (morbida)");
}
 
let idade2=25
let imc2="abaixo";
if( imc2 ==="sobrepeso" && idade2<30){
console.log("você deve fazer esteira" );
}
else if(imc2==="normal" || idade2<20 ){
console.log("você deve ir correr na rua");
}
else{
    console.log("faz exer");
}






//pode ser assim : else if (imc >18.5 && imc < 24.90)...
