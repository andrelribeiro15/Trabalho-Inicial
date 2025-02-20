function validaLogin(){

if(document.cadastrar.nome.value == ""){

    alert("Informe o  nome !");
    document.cadastrar.nome.focus();
    return false 
}

var email = document.cadastrar.email.value;
    var expRegEmail = RegExp("^[a-z]{1,100}[@]{1}[a-z]{1,5}[.]{1}[c]{1}[o]{1}[m]{1}$");
    if(!expRegEmail.test(email)){
        alert("Digite corretamente o email");
        document.cadastrar.email.focus();
        return false;
    }

if(document.cadastrar.senha.value == ""){

    alert("Informe a senha !");
    document.cadastrar.senha.focus();
    return false 
}

var senhaSalva = document.cadastrar.senha.value
if(document.cadastrar.confirmarSenha.value == "" || (document.cadastrar.confirmarSenha.value != senhaSalva )){

    alert("Informe a mesma que senha que esta anterior  !");
    document.cadastrar.nome.focus();
    return false 
}

return true;

}