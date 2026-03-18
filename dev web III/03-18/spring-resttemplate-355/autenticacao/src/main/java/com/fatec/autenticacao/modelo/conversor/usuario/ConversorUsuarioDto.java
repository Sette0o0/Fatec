package com.fatec.autenticacao.modelo.conversor.usuario;

import com.fatec.autenticacao.modelo.entidade.Autoridade;
import com.fatec.autenticacao.modelo.entidade.Usuario;
import com.fatec.autenticacao.modelo.usuario.dto.LoginUsuarioDto;
import com.fatec.autenticacao.modelo.usuario.dto.UsuarioDto;

public class ConversorUsuarioDto {
	
	public static Usuario converter(UsuarioDto dto) {
		Usuario usuario = new Usuario();
		usuario.setNome(dto.getNome());
		usuario.setEmail(dto.getEmail());
		for (String autoridade : dto.getAutoridades()) {
			usuario.getAutoridades().add(Autoridade.valueOf(autoridade));
		}
		return usuario;
	}


	public static Usuario converter(LoginUsuarioDto dto) {
		Usuario usuario = new Usuario();
		usuario.setEmail(dto.getEmail());
		usuario.setSenha(dto.getSenha());
		return usuario;
	}
}