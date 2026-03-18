package com.fatec.autenticacao.modelo.jwt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class JwtDto {
	@NotBlank(message = "JWT não preenchido ou inexistente")
	@Size(
			min = 100, max = 300,
			message = "Tamanho do JWT fora da especificação, min: 100, max: 300"
	)
	private String jwt;
}