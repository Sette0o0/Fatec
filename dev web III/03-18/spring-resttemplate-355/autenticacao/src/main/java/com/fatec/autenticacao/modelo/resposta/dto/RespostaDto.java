package com.fatec.autenticacao.modelo.resposta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RespostaDto {
	private String titulo;
	private String mensagem;
}