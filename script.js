let ano_atual = new Date();

class Senai {
    codigo;
    cidade;
    anoConstrucao;
    qtdeCursos;

    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
    }

    calcularIdade() {
        this.idade = parseFloat(ano_atual.getFullYear()) - this.anoConstrucao;
    }

    dadosEscola() {
        return `O código da escola é ${this.codigo}. Ela se localiza em ${this.cidade}, foi fundada em ${this.anoConstrucao} e possui ${this.idade} anos.`;
    }
}

function compararEscolas() {
    // Pegando os valores dos inputs dentro da função
    const codigo = document.getElementById('codigo-escola').value;
    const cidade = document.getElementById('cidade-escola').value;
    const ano = parseInt(document.getElementById('ano-escola').value);
    const cursos = parseInt(document.getElementById('cursos-escola').value);

    const codigo2 = document.getElementById('codigo-escola2').value;
    const cidade2 = document.getElementById('cidade-escola2').value;
    const ano2 = parseInt(document.getElementById('ano-escola2').value);
    const cursos2 = parseInt(document.getElementById('cursos-escola2').value);

    const escola01 = new Senai(codigo, cidade, ano, cursos);
    const escola02 = new Senai(codigo2, cidade2, ano2, cursos2);

    // Comparando as escolas
    if (escola01.qtdeCursos > escola02.qtdeCursos){
        document.getElementById('resultText').textContent = `A escola de ${escola01.cidade} tem ${escola01.qtdeCursos} cursos, possuindo mais do que a escola de ${escola02.cidade} que tem apenas ${escola02.qtdeCursos}.`;
    }
    else if (escola02.qtdeCursos > escola01.qtdeCursos){
        document.getElementById('resultText').textContent = `A escola de ${escola02.cidade} tem ${escola02.qtdeCursos} cursos, possuindo mais do que a escola de ${escola01.cidade} que tem apenas ${escola01.qtdeCursos}.`;
    }
    else{
        document.getElementById('resultText').textContent = `As escolas de ${escola01.cidade} e ${escola02.cidade} possuem a mesma quantidade de cursos.`;
    }
}

function limparRelatorio() {
    document.getElementById('resultText').textContent = '';
}
