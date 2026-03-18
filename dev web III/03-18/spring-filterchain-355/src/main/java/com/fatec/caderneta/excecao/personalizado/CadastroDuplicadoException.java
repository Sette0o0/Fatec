package com.fatec.caderneta.excecao.personalizado;

import lombok.Getter;

@Getter
public class CadastroDuplicadoException extends RuntimeException {
	private static final long serialVersionUID = 371337140504068050L;
	private String mensagem;

	public CadastroDuplicadoException(String titulo, String mensagem) {
		super(titulo);
		this.mensagem = mensagem;
	}
}