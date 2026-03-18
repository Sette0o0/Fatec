package com.fatec.caderneta.modelo.evento.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EdicaoEventoDto {
	@NotBlank(message = "Nome não preenchido ou inexistente")
	@Size(
			min = 5, max = 100,
			message = "Tamanho do nome fora da especificação, min: 5, max: 100"
	)
	private String nome;
	@NotBlank(message = "Identificador não preenchido ou inexistente")
	@Size(
			min = 7, max = 7,
			message = "Tamanho do identificador fora da especificação, min: 7, max: 7"
	)
	private String identificador;
	@Valid
	@NotNull(message = "Data do evento inexistente")
	private CalendarioDto data;
}