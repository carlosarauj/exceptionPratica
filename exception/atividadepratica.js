class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome
    this.idade = idade
    this.cargo = cargo
  }

  seApresentar() {
    return (`Me chamo ${this.nome}, sou ${this.cargo}, tenho ${this.idade} anos`)
  }

  trabalhar() {
    return (`Estou trabalhando como ${this.cargo}`)
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo)
    this.departamento = departamento
  }

  gerenciar() {
    return (`Me chamo ${this.nome}, sou Gerente, tenho ${this.idade} anos e cuido do ${this.departamento}`)
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo)
    this.linguagem = linguagem
  }

  programar() {
    return (`Me chamo ${this.nome}, sou o Desenvolvedor, tenho ${this.idade} anos e uso ${this.linguagem}`)
  }
}

document.getElementById('criarFunc').addEventListener('click', () => {
  let nome = document.getElementById('nome').value
  let idade = parseInt(document.getElementById('idade').value)
  let cargo = document.getElementById('cargo').value
  let departamento = document.getElementById('departamento').value
  let linguagem = document.getElementById('linguagem').value

  if (!nome || isNaN(idade) || !cargo) {
    exibirErro(alert('Por favor, preencha todos os campos.'))
    return;
  }

  try {
    let gerente = new Gerente(nome, idade, cargo, departamento)
    let desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem)

    exibirResultado(gerente.seApresentar(), gerente.gerenciar())
    exibirResultado(desenvolvedor.programar())
  } catch (error) {
    exibirErro('Ocorreu um erro.')
  }
});

function exibirErro(mensagem) {
  let erroDiv = document.getElementById('erro')
  erroDiv.textContent = mensagem;
}

function exibirResultado(resultado1, resultado2) {
  let resultadoDiv = document.getElementById('resultados')
  resultadoDiv.innerHTML += `<p>${resultado1}</p><p>${resultado2}</p>`
}