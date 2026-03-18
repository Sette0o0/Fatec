package com.fatec.caderneta.servico;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

@Service
public class ServicoValidaIdentificador {
	
	public void validar(String identificador) {
		String formatoIdentificadorPadrao = "^[A-Z][a-z][A-Z][a-z]\\d{3}$";
		if (identificador == null) {
			throw new NoSuchElementException("Identificador está nulo");
		}
		if (identificador.isBlank()) {
			throw new NoSuchElementException("Identificador está vazio ou sem caracteres");
		}
		if (identificador.length() != 7) {
			throw new NoSuchElementException("Identificador, fora do tamanho correto. "
					+ "Min: 7, Max: 7");
		}
		if(!identificador.matches(formatoIdentificadorPadrao)) {
			throw new NoSuchElementException("Identificador não está em um formato correto. "
					+ "Ex: MdUb614, QkAt283 etc...");
		}
	}
}