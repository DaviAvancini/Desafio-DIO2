# Desafio DIO 2 
nesse desafio a ideia proposta é criar um sistema de rank baseado nas vitórias e derrotas, a cada determinado número de vitórias o valor da variável rank muda, e no fim  é exibido no console.log no final.
segue abaixo às estruturas que eu seriam necessárias usar no desafio:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

A parte das vitórias e derrotas eu usei o math.random para gerar de maneira aleatória o que seria derrota ou vitória, e aumentei a probabilidade da vitória só para não ficar muito extenso no console, já que esse é um desafio apenas para testar os conhecimentos dessa área, seguindo, a parte de ranks e vitórias eu usei a estrutura de repetição while pra continuar até chegar no valor desejado, e usei às estruturas de if e else para aplicar às determinadas condições, como o da vitória e derrota baseado no resultado do math.random e a parte dos ranks eu apenas usei o if, else if e else para o fazer, usando os operadores para determinar o valor limite e às alterações feitas dentre o limite do número determinado, como por exemplo: 
```javascript
if (saldoVitorias <= 10) {
            rank = "ferro";
        }  
```
Basicamente, se o número foi menor ou igual a 10, o valor do rank vai ser igual ao texto ferro, e segui este mesmo raciocínio para continuar os outros ranks.
