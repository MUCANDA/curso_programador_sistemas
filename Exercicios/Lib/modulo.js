function Somatorio(lista) {
    let total = 0;
    let N = lista.length;

    for(let i=0; i<N; i++) {
        total += lista[i];
    }

    return total
}

function par(a) {
	let numero = a.filter(value => value % 2 == 0);

	let total = 0;

    for(let i=0; i<numero.length; i++) {
        total += numero[i];
    }

    return total
	}

    const lib = { Somatorio, par }

    module.exports = lib;