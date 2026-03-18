package com.fatec.caderneta.modelo.evento.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DonoEventoDto {
	@NotBlank(message = "Identificador não preenchido ou inexistente")
	@Size(
			min = 7, max = 7,
			message = "Tamanho do identificador fora da especificação, min: 7, max: 7"
	)
	private String identificador;	
	@NotNull(message = "E-mail dono do evento inexistente")
	@Size(
			min = 7, max = 50,
			message = "Tamanho do e-mail fora da especificação, min: 7, max: 50"
	)
	@Email(message = "E-mail não está no formato correto, ex: nome@dominio.com")
	private String email;
}