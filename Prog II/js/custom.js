document.getElementById("form-contato").onsubmit = validaCadastro;

function validaCadastro(){
var nome = document.getElementById("nome");
var sexo = document.getElementById("sexo");
var senha = document.getElementById("senha");
var senha2 = document.getElementById("senha2");
var contErro = 0;

 /*validação do nome*/

var caixa_nome = document.getElementById("msg-nome");
if(nome.value == "" || nome.value.indexOf(" ") == -1){
	caixa_nome.innerHTML = "favor preencher o nome completo";
	caixa_nome.style.display = "block";
	contErro += 1;
}else{
	caixa_nome.style.display = "none";

}

var caixa_sexo = document.getElementById("msg-sexo");
if(sexo.value == ""){
	caixa_sexo.innerHTML = "favor selecionar o sexo";
	caixa_sexo.style.display = "block";
	contErro += 1;
}else{
	caixa_sexo.style.display = "none";

}

var caixa_senha = document.getElementById("msg-senha");
if(senha.value == "" || senha.value.length < 6){
	caixa_senha.innerHTML = "favor preencher a senha";
	caixa_senha.style.display = "block";
	contErro += 1;
}else{
	caixa_senha.style.display = "none";

}

var caixa_senha2 = document.getElementById("msg-senha2");
if(senha2.value == "" || senha2.value.length < 6){
	caixa_senha2.innerHTML = "favor repetir a senha";
	caixa_senha2.style.display = "block";
	contErro += 1;
}else{
	caixa_senha2.style.display = "none";

}

if(senha.value != "" && senha2.value != ""&&senha.value != senha2.value){
	caixa_senha2.innerHTML = "As senhas não conferem";

	caixa_senha2.style = "block";
	
	contErro++;
}



if(contErro > 0)
	return false;
else
	return true;


}

