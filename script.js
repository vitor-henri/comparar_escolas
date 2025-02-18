let ano_atual = new Date()

class Escolas{
    codigo;
    cidade;
    anoFundacao;
    cursos;

    constructor(codigo, cidade, ano_fundacao, cursos){

        this.codigo = codigo;
        this.cidade = cidade;
        this.ano_fundacao = ano_fundacao;
        this.cursos = cursos;

    }

    descrever_escola(){

        console.log(`o código da cidade é ${this.codigo} ela se localiza em ${this.cidade}
        ela foi fundada em ${this.ano_fundacao} e possui ${parseFloat(ano_atual.getFullYear()) - this.ano_fundacao} anos`);

    };
};

const escola01 = new Escolas(603, 'Araraquara', 1945, 50);
const escola02 = new Escolas(715, 'Matão', 1925, 150);

console.log('#Relatório de Cadastro')
escola01.descrever_escola();
console.log('');
escola02.descrever_escola();
console.log('');

console.log('#Fim Relatório Cadastro\n')

console.log('#Relatorio de Cursos\n')
if (escola01.cursos > escola02.cursos){
    console.log(`a escola de ${escola01.cidade} tem ${escola01.cursos} cursos possuindo mais do que a escola de ${escola02.cidade} que tem apenas ${escola02.cursos}`)
}

else if(escola02.cursos > escola01.cursos){
    console.log(`a escola de ${escola02.cidade} tem ${escola01.cursos} cursos possuindo mais do que a escola de ${escola01.cidade} que tem apenas ${escola01.cursos}`)
}

else{
    console.log(`a escola de SENAI ${escola01.cidade} tem a mesma quantidade de cursos que a escola de SENAI ${escola02.cidade}\n`)
};

console.log('#Fim Relatório de Cursos')

function limpar(){
    //  o conteiner que esta com o id resultado ele vai deixar de aparecer usando a propriedade hidden
    document.getElementById('relatorio').style.visibility = 'hidden';
};