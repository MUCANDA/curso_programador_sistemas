function ImparPar(n){
	let resultado;
	let resto = n % 2;
	

if(resto == 1) {

	resultado = "Impar";
	

} else {
	resultado = "par";
	
}
return resultado;
}

console.log(ImparPar(4));
console.log(ImparPar(7));
console.log(ImparPar(0));
console.log(ImparPar(5));