const aldeao = {
  nome: "Isabelle",
  especie: "Cachorro",
  personalidade: "Normal",
  ocupacao: "Assistente",
  hobbies: ["jardinagem", "organização"]
};

const mobília = {
  nome: "Cama de Madeira",
  tema: "Madeira",
  preço: 1200,
  interativo: true,
  cores: ["marrom", "bege"]
};

const fruta = {
  tipo: "Maçã",
  valor: 100,
  raro: false,
  origem: "Árvore",
  usos: ["comer", "plantar", "vender"]
};

const peixe = {
  nome: "Dourado",
  tamanho: "Grande",
  valor: 15000,
  habitat: "Rio",
  disponibilidade: {
    meses: ["junho", "julho", "agosto"],
    horario: "4h às 21h"
  }
};

const ilha = {
  nome: "Paraíso Tropical",
  dono: "Jogador",
  habitantes: 10,
  clima: "Tropical",
  recursos: ["frutas", "peixes", "insetos", "minerais"]
};

const objetos = { aldeao, mobília, fruta, peixe, ilha };

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
