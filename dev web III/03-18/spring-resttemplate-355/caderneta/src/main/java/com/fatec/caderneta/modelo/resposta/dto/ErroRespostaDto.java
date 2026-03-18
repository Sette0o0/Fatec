package com.fatec.caderneta.modelo.resposta.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErroRespostaDto {
	private String titulo;
	private String mensagem;
}