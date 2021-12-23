
// Validação de Telefone
const foneValid = /^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/
const isValidFone = foneValid.test(foneValid)

// Validação de nome e permite acentos e espaços
/^[À-ú-a-zA-Z ]/

// Validação de Nome obrigatorio Nome e Sobrenome com as primeiras letras de cada nome maiusculas
/[A-Z][a-z]* [A-Z][a-z]*/


// Validação de Nome e Sobrenome obrigatorio nome e sobrenome com no  minimo 4 letras
/[À-ú-a-zA-Z]{4,255}[À-ú-a-zA-Z]* [À-ú-a-zA-Z]{4,255}[À-ú-a-zA-Z]*/

// Validação de CNPJ
/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/

// Validação de email
/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/


// Limpa os caracteres de mascaras de input
const clearPhone = phone.replace(/[^0-9]/g, '')

//MASKARA CNPJ JQUERY
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script> */}
const cnpjMask = document.querySelector('#CNPJ')
cnpjMask.addEventListener('focus', () =>  {
   $('#CNPJ').mask('00.000.000/0000-00', {reverse: true});
});

// MASCARA PARA CNPJ NÃO APAGA A BARRA
 document.addEventListener('input', function (e) {
     var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
 });

// MASCARA PARA TELEFONE JQUERY
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>
$("#produtoFone").mask("(99) 9999-99999");
   
//Validação de CNPJ
function validarCNPJ(cnpj) {
    let p = document.querySelector('.isValidInputCNPJ > p')

    cnpj = cnpj.replace(/[^\d]+/g,'');

    let counter = JSON.stringify(cnpj.length - 14) // formato de string para executar o replace na linha abaixo

    counter = counter.replace(/[^\d]+/g,''); // replace tira o sina de - negativo para apresentar ao usuario

    if(cnpj.length < 14){
        p.innerHTML = `Restam ${counter} caracteres` // mensagem apresentada ao usuario
    }
    else{
        p.innerHTML = 'Esse não é um CNPJ valido.'
    }

    if(cnpj == '') return false;

    if (cnpj.length != 14)
    return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
        pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(0))
    return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
        pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(1)){
        return false;
    }else{
        return true;
    }
}