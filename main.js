class Contatos {
    constructor(nome,email,telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
// Definindo a classe gerenciadorcontatos
class GerenciadorContatos {
    constructor(){
        // inicializa a lista de contatos vazia 
        this.contatos = []
    }

    adicionarContatos(contato){
        //adiciona um contato a lista de contatos
        this.contatos.push(contato); 
    }

    exibirContatos(){
        const listaContatos = document.getElementById
        ('contato-lista')
        
        //limpa a lista de contatos
        listaContatos.innerHTML = ''

        // para cada novo contato na lista de contatos, cria um novo elemento ''
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`

            listaContatos.appendChild(li)
        }
    }
}
// crua um objeto da classe gerenciador contatos
const gerenciadorcontatos = new GerenciadorContatos();

// cria os elementos necessarios
const contatoForm = document.getElementById
('contato-form')
const nomeform = document.getElementById('nome');
const emailform = document.getElementById('email');
const telefoneform = document.getElementById('tel');
const mostrarcontatos = document.getElementById('mostrar-contatos');
const ocultarcontatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', function(event) {

    event.preventDefault();
    const nome = nomeform.value;
    const email = emailform.value;
    const telefone = telefoneform.value;

    const contato = new Contatos(nome, email, telefone);

    gerenciadorcontatos.adicionarContatos(contato)

    nomeform = ''
    emailform = ''
    telefoneform = ''
});

mostrarcontatos.addEventListener('click', function(){
    gerenciadorcontatos.exibirContatos();
    listaContatos.style.display = 'block'
});

ocultarcontatos.addEventListener('click', function(){
    listaContatos.style.display = 'nome'
})