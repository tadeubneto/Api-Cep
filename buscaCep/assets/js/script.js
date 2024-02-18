// variáveis
const cep = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')
const ibge = document.querySelector('#ibge')

// função que irá pesquisar o cep

function verificarEnter(event) {
  if (event.key === 'Enter') {
      pesquisaCep(document.getElementById('cep').value);
  }
}

function pesquisaCep(valor) {
  //expressao regular para validar o cep
  const cepValid = /^[0-9]{8}$/
  // se o cep digitado for válido, ou seja, tiver 8 caracteres numéricos o if será executado
  if (cepValid.test(cep.value)) {
    document.getElementById('rua').value = '...'
    document.getElementById('bairro').value = '...'
    document.getElementById('cidade').value = '...'
    document.getElementById('uf').value = '...'
    document.getElementById('ibge').value = '...'
    // cria um elemento script dinâmico
    const script = document.createElement('script')
    // define o atributo src do elemento script com a URL da API DO vIA cEP, onde cep.value é o valor do CEP inserido e meu_callback é um callback que será chamado quando os dados estiverem disponíveis.
    script.src =
      'https://viacep.com.br/ws/' + cep.value + '/json/?callback=meu_callback'

    // adiociona o elemnto scritp criado ao HTML iniciando a requisição para a API
    document.body.appendChild(script)
  } else {
    alert('formato invalido')
  }
}

function meu_callback(conteudo) {
  if (!('error' in conteudo)) {
    document.getElementById('rua').value = conteudo.logradouro
    document.getElementById('bairro').value = conteudo.bairro
    document.getElementById('cidade').value = conteudo.localidade
    document.getElementById('uf').value = conteudo.uf
    document.getElementById('ibge').value = conteudo.ibge
  } else {
    alert('Cep não encontrado')
  }
}
