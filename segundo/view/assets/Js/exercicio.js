/*





🔧 Desafio bônus: Crie um sistema de login simples: o usuário digita login e senha, e o programa diz se está correto ou não (pode ser fixo).

🔴 Nível Avançado — Funções Avançadas, Assíncronas, DOM

Função como parâmetro (callback)

Crie uma função que recebe outra função e um valor, e executa a função no valor.

Funções anônimas e arrow functions

Reescreva funções usando =>.

Manipulação de DOM (se for rodar no navegador)

Crie um botão que, ao ser clicado, muda o texto de um parágrafo.

Fetch API (requisição HTTP)

Faça uma requisição para a API https://jsonplaceholder.typicode.com/users e exiba os nomes.

Async/Await

Reescreva o exercício acima com async/await.

🔧 Desafio bônus: Crie um app simples que busca dados de uma API e mostra na tela com loading (pode ser lista de usuários, posts, etc.)
*/

 // Crie um objeto carro com marca, modelo e ano. Exiba uma frase com essas informações.


//Use .map() para dobrar os números de um array.
//Ex: [1, 2, 3] → [2, 4, 6]



/* function operar(n1,n2,callback){

return callback(n1,n2)
}

const soma = (n,n2) => n+n2;
const subtracao = (n,n2) => n-n2;
const div = (n,n2) => n/n2;
const mult = (n,n2) => n*n2;

 console.log(operar(5,8, soma)); */

/*
 const numeros = Array(10,10,10)
 
let i =0


const soma= numeros.reduce(  (acumulador,valor)=> {
    i++
   return  acumulador+=valor
 },0 )

 const media = soma / i
  console.log(media);
*/
/*
const ListaNumeros = [1,2,3,4,5,6,7,8,9,10]

const Numeros_par_duplicados = ListaNumeros.filter(n => n%2==0).map(n => n*2)

console.log("----> Numeros pares duplicados a baixo <-----");
console.log(Numeros_par_duplicados);
console.log("----> Numeros original a baixo <-----");
console.log(ListaNumeros); */
/*
const usuarios = [
  { nome: "Jones", idade: 24 },
  { nome: "Maria", idade: 17 },
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 15 }
];

const O_primeiro_maior_de_idade = usuarios.find(vetor => vetor.idade >= 18 )
const um_menor_de_idade = usuarios.some(vetor => vetor.idade < 18 )

  console.log(O_primeiro_maior_de_idade);
  console.log(um_menor_de_idade);
  
  */
 /*
const usuarios = [
  { nome: "Jones", idade: 24 },
  { nome: "Maria", idade: 17 },
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 15 }
];

const all_maiores_de_idade = usuarios.every(vetor => vetor.idade >= 18 )
  console.log(all_maiores_de_idade);*/
/*
  const pessoa = {
    Nome:"Jones",
    idade: 21,
    profissao: "Engenheiro de Softwar",
    apresentar(){
        console.log(`Olá, meu nome é [${this.Nome}],tenho [${this.idade}] anos de idade e sou [${this.profissao}] `);
    }
  }
  //Ou posso fazer assim 
  
function Pessoa(nome,idade,profissao)
{
    this.Nome = nome;
    this.idade = idade
    this.profissao = profissao
     this.apresentar = ()=> {
        console.log(`Olá, meu nome é [${this.Nome}],tenho [${this.idade}] anos de idade e sou [${this.profissao}] `);
    }
  }

  //Ou assiim

  function Criar_pessoa(nome,idade,profissao)
{

    return{
        
     Nome:nome,
    Idade: idade,
    Profissao: profissao,
    Apresentar(){
        console.log(`Olá, meu nome é [${this.Nome}],tenho [${this.idade}] anos de idade e sou [${this.profissao}] `);
    }

    }
  
  }

  const p1 = Criar_pessoa("Maria",22,"Engenheira")
  p1.Apresentar()
  pessoa.apresentar()
  const p2 = new Pessoa("Edy","19","Gestor de Informática")
  p2.apresentar()*/

/*
  const Usuario = {
    nome: "Jones",
    idade:21,
    contacto:{
        email:"jones98648@gmail.com",
        telefone:927548631
    },
    endereco:{
        rua:"Papa Jõao",
        cidade:"Moxico",
        pais:"Inglaterra"
    },
    mostrarDados(){
        console.log(`Nome: ${this.nome} Idade: ${this.idade} Email:${this.contacto.email} Telefone:${this.contacto.telefone} Endereço: ${this.endereco.rua}-${this.endereco.cidade} - ${this.endereco.pais}`);
        
    }
  }

  Usuario.mostrarDados()
*/

/*

const configuracoes = {
    tema:"dark",
    idioma:"pt",
    notificacoes:true
}

let chave = "idioma"

console.log(configuracoes[chave]);
*/

const livro = {
    titulo:"As crónicas de Jones",
    autor: "Jones José",
    Ano: 2026,
    Disponivel: false

}

