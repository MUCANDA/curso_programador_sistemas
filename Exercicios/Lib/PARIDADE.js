function somatorio (N) {
    let soma=0;
    let k=1;
    
    while( k<=N){
        soma+=k;
        k++;
     
    }
    
    return soma;
}
console.log(somatorio(5));
console.log(somatorio(10));
console.log(somatorio(1));
console.log(somatorio(64));