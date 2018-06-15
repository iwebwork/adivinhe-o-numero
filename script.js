function verificar() {
	
	var n1 = document.getElementById("campo1").innerHTML;
	var n2 = document.getElementById("campo2").value;


	if (n1 === n2){
                alert("Você e um sabixão!!!");
		resetar();
	} else{
		alert("Você não sabe de nada inocente!!!");
	}

	
}





function resetar(){
	document.getElementById("campo2").value = "";

	var r = Math.floor(Math.random() * 10);
	document.getElementById("campo1").innerHTML = r;

}



