package com.fatec.caderneta.modelo.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
public class EventoDTO {
	private Long id;
	@NotBlank(message = "Nome do evento em branco")
    private String nome;
    private CalendarioDTO calendario;
}

