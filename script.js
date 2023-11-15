var jogo = prompt('Quer jogar um jogo ?(s/n)');
if(jogo == 's'){
 
  
  var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
  var contador = 0;
  console.log(numeroSecreto);
  
  while(tentativa != numeroSecreto){
    
    if(contador != 0){
      alert('Você já fez ' + contador + ' tentativas!')
    }
    
    var tentativa = prompt('Digite um número entre 1 e 1000');
    
    if (tentativa == numeroSecreto){
      alert('Acertou!');
    } else if (tentativa > numeroSecreto){
         alert('O número secreto é menor que ' + tentativa);
    } else if (tentativa < numeroSecreto){
         alert('O número secreto é maior que ' + tentativa);
    }
    
    contador += 1;
 
  } 
}