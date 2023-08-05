var vz = 1, soma = 0
const vezes = parseInt (prompt('Este site executa o cálculo da soma e média dos números digitados.\n Insira quantos números deseja digitar: '))
while(vz <= vezes){

    var num = parseInt (prompt('Digite um número:'))
    soma = soma + num
    vz ++
}

alert("A soma dos números digitados é igual a " + soma + ". \nA média dos números digitados é igual a " + (soma/vezes) + ".")