//lista com valores de todas as classificações
let experiencias = [
    200, 1500, 2001, 6999, 9000, 9001, 10250
];

//nome do herói
const nome = "Formiga Atômica";

//define a classificação de acordo com a xp do herói
function definirClassificacao (xp) {
    switch (true) {

        case xp <= 1000:
            return "Ferro";

        case xp > 1000 && xp <= 2000:
            return "Bronze";

        case xp > 2000 && xp <= 5000:
            return "Prata";

        case xp > 5000 && xp <= 7000:
            return "Ouro";

        case xp > 7000 && xp <= 8000:
            return "Platina";

        case xp > 8000 && xp <= 9000:
            return "Ascendente";

        case xp > 9000 && xp <= 10000:
            return "Imortal";

        case xp > 10000:
            return "Radiante";
        
        default:
            return "Sem classificação"
    };
};

//função que faz com que a função definirClassificação itere sobre todos os itens da lista
function todasClassificacoes(){
    for (let experiencia of experiencias) {
        const classificacao = definirClassificacao(experiencia)
        const frase = `O Herói ${nome} está no nível de ${classificacao}`
        console.log(frase)
    };
};

todasClassificacoes()
