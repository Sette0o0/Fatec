package com.fatec.autenticacao.modelo.conversor.usuario;

import java.util.ArrayList;
import java.util.List;

import com.fatec.autenticacao.modelo.entidade.Autoridade;
import com.fatec.autenticacao.modelo.entidade.Usuario;
import com.fatec.autenticacao.modelo.usuario.dto.UsuarioDto;
import com.fatec.autenticacao.modelo.usuario.dto.UsuarioSimplesDto;

public class ConversorUsuario {

	public static List<UsuarioDto> converter(Iterable<Usuario> usuarios) {
		List<UsuarioDto> dtos = new ArrayList<>();
		for (Usuario usuario : usuarios) {
			UsuarioDto dto = ConversorUsuario.converter(usuario);
			dtos.add(dto);
		}
		return dtos;
	}

	public static UsuarioDto converter(Usuario usuario) {
		UsuarioDto dto = new UsuarioDto();
		dto.setNome(usuario.getNome());
		dto.setEmail(usuario.getEmail());
		for (Autoridade autoridade : usuario.getAutoridades()) {
			dto.getAutoridades().add(autoridade.toString());
		}
		return dto;
	}

	public static UsuarioSimplesDto converterSimples(Usuario usuario) {
		UsuarioSimplesDto dto = new UsuarioSimplesDto();
		dto.setNome(usuario.getNome());
		dto.setEmail(usuario.getEmail());
		return dto;
	}
}