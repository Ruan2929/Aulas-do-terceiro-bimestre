
alert(10+5);



//declarei as variaveis e atribui valores
let a,b,c,d; a=5; b=6; c=7; d= a*b*c; 

console.log(d)

/*
testando comentarios

*/

let nome, sobrenome, nomeCompleto, idade, soma;

nome="Ruan ";
sobrenome="Salvi";
idade = 20;
nomeCompleto= nome + sobrenome;

soma = idade - 5
document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("idade").innerHTML = soma;

/* let= deixa a variavel unica e obedece o escopo

    exemplo: 

    let x = 10; AQUI O VALOR SERIA 10

    {
        let x = 2; AQUI O VALOR SERIA 2, POIS ESTA DENTRO DO ESCOPO    
    }

    ------------------------------------------------

    var= a variavel não é única

    ------------------------------------------------

    const= nunca é alterado, mesmo se tiver um const em um escopo


*/
