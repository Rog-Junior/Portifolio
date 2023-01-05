var nome = document.getElementById("nome").value;
var senha = document.getElementById("senha").value;
var btnLogin = document.getElementById("btnLogin");

function valueatt(){
	var nome = document.getElementById("nome").value;
	var senha = document.getElementById("senha").value;
	console.log(nome + " " + senha)

	if(nome == "" || senha == ""){
  		console.log("escreva no campo nome/senha");
		btnLogin.style.backgroundColor = "grey";
	
  	}else{
  		console.log("verificado");
		btnLogin.style.backgroundColor = "black";
}
}


function verify(){
	if(nome == "" || senha == ""){
  		console.log("escreva no campo nome/senha")
  	}else{
  		console.log("verificado")}
}
