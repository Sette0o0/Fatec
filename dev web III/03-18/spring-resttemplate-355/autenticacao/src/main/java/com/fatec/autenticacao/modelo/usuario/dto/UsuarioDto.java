package com.fatec.autenticacao.modelo.usuario.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UsuarioDto {
	private String nome;
	private String email;
	private List<String> autoridades = new ArrayList<>();

}