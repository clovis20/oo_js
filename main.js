function Pessoa(nome, idade, cidade, estadoCivil){
	this.nome = nome
    this.idade = idade
    this.cidade = cidade
    this.estadoCivil = estadoCivil
}

function Trabalho(nome, idade, cidade, estadoCivil, profissao, salario) {
    this.profissao = profissao;
    this.salario = salario;

    Pessoa.call(this, nome, idade, cidade, estadoCivil);
}



const pessoa1 = new Trabalho("Carlos", "15", "Fortaleza", "Solteiro", "Estudante", "0.0");
const pessoa2 = new Trabalho("Carla", "42", "Cascavel", "Viúva", "Arquiteta", "12.500");
const pessoa3 = new Trabalho("Lucas", "25", "Natal", "Casado", "Jornalista", "8.500");


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
