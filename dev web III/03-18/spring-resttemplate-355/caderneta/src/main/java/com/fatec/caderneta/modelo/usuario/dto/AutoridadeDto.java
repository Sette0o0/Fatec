package com.fatec.caderneta.modelo.usuario.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AutoridadeDto {
	@NotBlank(message = "E-mail não preenchido ou inexistente")
	@Size(
			min = 7, max = 50,
			message = "Tamanho do e-mail fora da especificação, min: 7, max: 50"
	)
	@Email(message = "E-mail não está no formato correto, ex: nome@dominio.com")
	private String email;
    @NotBlank(message = "Autoridade não preenchida ou inexistentes")
	@Size(
			min = 5, max = 20,
			message = "Tamanho da autoridade fora da especificação, min: 5, max: 20"
	)
	String autoridade;
}