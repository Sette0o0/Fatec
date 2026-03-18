package com.fatec.caderneta.modelo.evento.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CalendarioDto {
	@NotBlank(message = "Dia do calendário não preenchido ou inexistente")
	@Size(
			min = 1, max = 2,
			message = "Tamanho do dia fora da especificação, min: 1, max: 2"
	)
    private String dia;
	@NotBlank(message = "Mês do calendário não preenchido ou inexistente")
	@Size(
			min = 1, max = 2,
			message = "Tamanho do mês fora da especificação, min: 1, max: 2"
	)
    private String mes;
	@NotBlank(message = "Ano do calendário não preenchido ou inexistente")
	@Size(
			min = 4, max = 4,
			message = "Tamanho do ano fora da especificação, min: 4, max: 4"
	)
    private String ano;
	@NotBlank(message = "Hora do calendário não preenchido ou inexistente")
	@Size(
			min = 1, max = 2,
			message = "Tamanho da hora fora da especificação, min: 1, max: 2"
	)
    private String hora;
	@NotBlank(message = "Minuto do calendário não preenchido ou inexistente")
	@Size(
			min = 1, max = 2,
			message = "Tamanho do minuto fora da especificação, min: 1, max: 2"
	)
    private String minuto;
}