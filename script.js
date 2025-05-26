const livro = {
  titulo: "Narnia",
  autor: "J.R.A. Matias",
  ano: 1955,
  generos: ["fantasia", "aventura"]
};

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  cor: "prata",
  km: 5000
};

const aluno = {
  nome: "Aline Silva",
  idade: 17,
  turma: "3A",
  notas: {
    portugues: 8.5,
    matematica: 9.0,
    historia: 7.0
  }
};

const produto = {
  nome: "Smartphone",
  marca: "Samsung",
  modelo: "Galaxy S23",
  preco: 2500.00,
  especificacoes: {
    tela: "AMOLED",
    camera: "12MP"
  }
};

const cidade = {
  nome: "São Paulo",
  estado: "São Paulo",
  pais: "Brasil",
  populacao: 12396372,
  clima: "tropical de altitude"
};

const objetos = { livro, carro, aluno, produto, cidade };

const listasDiv = document.getElementById('listas');

for (const [nome, objeto] of Object.entries(objetos)) {
  const ul = document.createElement('ul');
  ul.innerHTML = `<strong>${nome}</strong>`;
  for (const [chave, valor] of Object.entries(objeto)) {
    const texto = typeof valor === 'object' ? JSON.stringify(valor, null, 2) : valor;
    ul.innerHTML += `<li><strong>${chave}</strong>: ${texto}</li>`;
  }
  listasDiv.appendChild(ul);
}

const jsonFormatado = JSON.stringify(objetos, null, 2);

console.log("Objetos em JSON formatado:\n", jsonFormatado);

document.getElementById("json-formatado").textContent = jsonFormatado;
