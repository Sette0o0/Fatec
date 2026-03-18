package com.fatec.caderneta.modelo.conversor.usuario;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.CriacaoUsuarioDto;
import com.fatec.caderneta.modelo.usuario.dto.LoginUsuarioDto;
import com.fatec.caderneta.modelo.usuario.dto.UsuarioDto;

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

	public static Usuario converter(CriacaoUsuarioDto dto) {
		Usuario usuario = new Usuario();
		usuario.setNome(dto.getNome());
		usuario.setEmail(dto.getEmail());
		usuario.setSenha(dto.getSenha());
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