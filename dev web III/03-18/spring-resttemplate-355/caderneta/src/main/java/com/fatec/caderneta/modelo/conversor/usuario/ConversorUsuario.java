package com.fatec.caderneta.modelo.conversor.usuario;

import java.util.ArrayList;
import java.util.List;

import com.fatec.caderneta.modelo.conversor.evento.ConversorEvento;
import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.evento.dto.EventoDto;
import com.fatec.caderneta.modelo.usuario.dto.UsuarioDto;
import com.fatec.caderneta.modelo.usuario.dto.UsuarioSimplesDto;

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
		for (Evento evento : usuario.getEventosComoDono()) {
			EventoDto eventoDto = ConversorEvento.converter(evento);
			dto.getEventosComoDono().add(eventoDto);

		}
		for (Evento evento : usuario.getEventosComoParticipante()) {
			EventoDto eventoDto = ConversorEvento.converter(evento);
			dto.getEventosComoParticipante().add(eventoDto);

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