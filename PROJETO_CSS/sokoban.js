const tabela2 = document.getElementById('tabela2');
const M = 8;
const N = 8;

for (let k = 0; k < M; k++) {
    const linha = document.createElement('div');
    linha.classList.add('linha');

    for (let i = 0; i < N; i++) {
        const celula = document.createElement('div');
        celula.classList.add('celula');
        linha.appendChild(celula);

        //        if(i == 0 || i==N-1|| k==0 || k==M-1) {
        //  celula.classList.add('vazio');

        if (i > 0 && i < 7 && k > 0 && k < 7) {
            celula.classList.add('vazio');

        }
        tabela2.append(linha);
    }
}