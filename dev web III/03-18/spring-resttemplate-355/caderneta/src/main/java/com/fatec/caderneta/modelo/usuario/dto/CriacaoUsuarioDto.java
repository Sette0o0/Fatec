package com.fatec.caderneta.modelo.usuario.dto;

import java.util.ArrayList;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CriacaoUsuarioDto {
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
	@NotBlank(message = "Senha não preenchida ou inexistente")
	@Size(
			min = 5, max = 8,
			message = "Tamanho da senha fora da especificação, min: 6, max: 8"
	)
	private String senha;
	@NotNull(message = "A lista de autoridades está nula")
    @NotEmpty(message = "A lista de autoridades está vazia")
	@Valid
    private List<
	@NotBlank(message = "Autoridades não preenchidas ou inexistentes")
	@Size(
			min = 5, max = 20,
			message = "Tamanho da autoridade fora da especificação, min: 5, max: 20"
	)
	String > autoridades = new ArrayList<>();
}