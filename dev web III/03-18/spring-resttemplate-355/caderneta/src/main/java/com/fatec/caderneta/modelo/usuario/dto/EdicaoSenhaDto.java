package com.fatec.caderneta.modelo.usuario.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EdicaoSenhaDto {
	@NotBlank(message = "E-mail não preenchido ou inexistente")
	@Size(
			min = 7, max = 50,
			message = "Tamanho do e-mail fora da especificação, min: 7, max: 50"
	)
	@Email(message = "E-mail não está no formato correto, ex: nome@dominio.com")
	private String email;
	@NotBlank(message = "Senha antiga não preenchida ou inexistente")
	@Size(
			min = 5, max = 8,
			message = "Tamanho da senha antiga fora da especificação, min: 6, max: 8"
	)
    private String senhaAntiga;
	@NotBlank(message = "Nova senha não preenchida ou inexistente")
	@Size(
			min = 5, max = 8,
			message = "Tamanho da nova senha fora da especificação, min: 6, max: 8"
	)
    private String novaSenha;
}