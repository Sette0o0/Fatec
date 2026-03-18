package com.fatec.caderneta.servico;

import org.springframework.stereotype.Service;

@Service
public class ServicoCriaIdentificador {
	private String[] letrasM = { 
		    "A", "B", "C", "D", "E", "F", "G", "H", 
		    "I", "J", "K", "L", "M", "N", "O", "P", 
		    "Q", "R", "S", "T", "U", "V", "W", "X", 
		    "Y", "Z" 
		};
	
	private String[] letras = { 
		    "a", "b", "c", "d", "e", "f", "g", "h", 
		    "i", "j", "k", "l", "m", "n", "o", "p", 
		    "q", "r", "s", "t", "u", "v", "w", "x", 
		    "y", "z" 
		};
	
	private int[] numeros = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
	
	private int indice(int numeroMaximo) {
		return (int) (Math.random()*numeroMaximo);
	}
	
	public String criar() {
		String identificador = "";
		identificador = identificador + letrasM[indice(letrasM.length)];
		identificador = identificador + letras[indice(letras.length)];
		identificador = identificador + letrasM[indice(letrasM.length)];
		identificador = identificador + letras[indice(letras.length)];
		identificador = identificador + numeros[indice(numeros.length)];
		identificador = identificador + numeros[indice(numeros.length)];
		identificador = identificador + numeros[indice(numeros.length)];
		return identificador;
	}
}