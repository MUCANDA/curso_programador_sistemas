//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./exportado1.csv').toString();

const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = parteDificil(headers, conteudo);

console.table(json, headers);

/////////////////////////////

function quebraLinhas(csv) {
    let linhas = csv.trim().split('\n');
    return linhas;
}

function separaColunas(linha) {
    let colunas = linha.trim().split(';')
    return colunas;
}

function separaConteudo(lines) {
    const conteudo = [];

    for(let i=0; i<lines.length; i++) {
        let linha = lines[i];
        let colunas = separaColunas(linha);

        conteudo.push(colunas);
    }

    return conteudo;
}
function constroListaObj ( headeres, linhatabela){
    let obj = {};
    for(let j=0; j<headers.length; j++){
        let titulo = headers[j];
        let coluna = linha[j];

        obj[titulo] = coluna;
    {

        return obj;
    }

}

function parteDificil(headers, conteudo) {
    const result = [];

    for(let i=0; i<conteudo.length; i++) {
        let obj = {};
        let linha = conteudo[i];

        obj = constroObj(headeres, linhatabela);

        
        }

        result.push(obj);
    }

    return result;
}
