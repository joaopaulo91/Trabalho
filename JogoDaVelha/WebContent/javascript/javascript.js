jogador = 1;
vetor = [ [], [], [] ];
     
	 jogadaJog1 = 0;
	 jogadaJog2 = 0;

jogar = function(id, x, y) {    
	ninguemGanhou = 0; 
	elem = document.getElementById(id);
	
	if (jogador == 1) {
		vetor[x][y] = "X";
		jogador = 2;
		elem.className="casa X"
		jogadaJog1++;
	} else {
		vetor[x][y] = "O";
		jogador = 1;
		elem.className="casa O";
		jogadaJog2++;
	}
	/*Valida se ganhou na primeira linha*/
	if (vetor[0][0] != undefined && vetor[0][0] == vetor[0][1] && vetor[0][1] == vetor[0][2]) {
		alert("" + vetor[0][0] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
		
	/*Valida se ganhou na segunda linha*/
	}else if(vetor[1][0] != undefined && vetor[1][0] == vetor[1][1] && vetor[1][1] == vetor[1][2]){
		alert("" + vetor[1][0] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
		
	/*Valida se ganhou na terceira linha*/
	}else if(vetor[2][0] != undefined && vetor[2][0] == vetor[2][1] && vetor[2][1] == vetor[2][2]){
		alert("" + vetor[2][0] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
		
	/*Valida se ganhou na primeira coluna*/
	}else if(vetor[0][0] != undefined && vetor[0][0] == vetor[1][0] && vetor[1][0] == vetor[2][0]){
		alert("" + vetor[0][0] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;		
		
	/*Valida se ganhou na segunda coluna*/
	}else if(vetor[0][1] != undefined && vetor[0][1] == vetor [1][1] && vetor[1][1] == vetor[2][1]){
		alert("" + vetor[0][1] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
		
	/*Valida se ganhou na terceira coluna*/	
	}else if(vetor[0][2] != undefined && vetor[0][2] == vetor [1][2] && vetor[1][2] == vetor[2][2]){
		alert("" + vetor[0][2] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;	

	/*Valida se ganhou na diagonal*/	
	}else if(vetor[0][0] != undefined && vetor[0][0] == vetor[1][1] && vetor[1][1] == vetor[2][2]){ 
	    alert("" + vetor[1][1] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
		
	}else if(vetor[0][2] != undefined && vetor[0][2] == vetor[1][1] && vetor[1][1] == vetor[2][0]){	
	    alert("" + vetor[1][1] + " Ganhou!");
		window.location.reload();
		ninguemGanhou++;
	}	
	if(ninguemGanhou==0 && jogadaJog1==5 || jogadaJog2==5){	    
	    alert("Ninguém ganhou!");	
		window.location.reload();
		}	
}