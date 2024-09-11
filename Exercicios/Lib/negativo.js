function PositivoNegativo(N) {
ler resposta;
if(N==0){ return "zero";}
if(N<0){
	resposta="Negativo"
}
else{
	resposta="positivo"
}
return resposta;
}
console.log(PositivoNegativo(5));
console.log(PositivoNegativo(-3));
console.log(PositivoNegativo(0));
console.log(PositivoNegativo("1110"));
console.log(PositivoNegativo("-987654321"));
