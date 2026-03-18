package com.fatec.caderneta.modelo.evento.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ExclusaoEventoDto {
	@NotBlank(message = "Identificador não preenchido ou inexistente")
	@Size(
			min = 7, max = 7,
			message = "Tamanho do identificador fora da especificação, min: 7, max: 7"
	)
	private String identificador;
}