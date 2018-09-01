// JavaScript source code
function compute() {
	total = 3
	score = 0
	if (document.getElementById("q1b").checked){
		score = score+1
	}
	if (document.getElementById("q2b").checked){
		score = score+1
	}
	if (document.getElementById("q3a").checked){
		score = score+1
	}
	if (score == 3){
		alert("Parabens, voce acertou "+ score+" de "+ total+ " perguntas")
	}
	else{
	    alert("Voce acertou "+ score+" de "+ total+ " perguntas")
	}
}
