package com.fatec.caderneta.modelo.usuario.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EdicaoNomeDto {
	@NotBlank(message = "Nome não preenchido ou inexistente")
	@Size(
			min = 5, max = 100,
			message = "Tamanho do nome fora da especificação, min: 5, max: 100"
	)
	private String nome;
	@NotBlank(message = "E-mail não preenchido ou inexistente")
	@Size(
			min = 7, max = 50,
			message = "Tamanho do e-mail fora da especificação, min: 7, max: 50"
	)
	@Email(message = "E-mail não está no formato correto, ex: nome@dominio.com")
	private String email;
}