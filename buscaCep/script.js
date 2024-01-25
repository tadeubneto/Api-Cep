const cep = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')
const ibge = document.querySelector('#ibge')

function pesquisaCep(valor) {
  //expressao regular para validar o cep
  const somenteNumeros = valor.replace(/\D/g, '')
  const cepValid = /^[0-9]{8}$/
  console.log(cep.value)
  if (cepValid.test(cep.value)) {
    document.getElementById('rua').value = '...'
    document.getElementById('bairro').value = '...'
    document.getElementById('cidade').value = '...'
    document.getElementById('uf').value = '...'
    document.getElementById('ibge').value = '...'

    const script = document.createElement('script')

    script.src =
      'https://viacep.com.br/ws/' + cep.value + '/json/?callback=meu_callback'

    document.body.appendChild(script)
  } else {
    alert('formato invalido')
  }
}

function meu_callback(conteudo) {
  console.log(conteudo)
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
