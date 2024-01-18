function matchHistory() {
    let saldoVitorias = 0
    let rank = "nenhum"
    let vitoriaTexto = "vitórias"
    for (saldoVitorias=1; saldoVitorias <=101; saldoVitorias++) {
        if (saldoVitorias <= 10) {
            rank = "ferro"
        } else if (saldoVitorias <=20) {
            rank = "Bronze"
        } else if (saldoVitorias <=50) {
            rank = "Prata"
        } else if (saldoVitorias <=80) {
            rank = "Ouro"
        } else if (saldoVitorias <=90) {
            rank = "Diamante"
        } else if (saldoVitorias <=100) {
            rank = "Lendário"
        } else {
            rank = "Imortal"
        }
        console.log(`O Herói tem de saldo de ${saldoVitorias} ${vitoriaTexto}  está no nível de ${rank}`)
    }

}
matchHistory();