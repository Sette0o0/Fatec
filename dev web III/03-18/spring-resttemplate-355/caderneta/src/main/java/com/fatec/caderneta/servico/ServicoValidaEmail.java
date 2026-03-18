package com.fatec.caderneta.servico;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

@Service
public class ServicoValidaEmail {
	
	public void validar(String email) {
		String formatoEmailPadrao = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
		if (email == null) {
			throw new NoSuchElementException("E-mail está nulo");
		}
		if (email.isBlank()) {
			throw new NoSuchElementException("E-mail está vazio ou sem caracteres");
		}
		if (email.length() < 7 || email.length() > 50) {
			throw new NoSuchElementException("E-mail muito longo, fora do formato correto."
					+ "Min: 7, Max: 50");
		}
		if (!email.matches(formatoEmailPadrao)) {
			throw new NoSuchElementException("E-mail não está em um formato correto. " 
					+ "Ex: nome@dominio.com");
		}
	}
}