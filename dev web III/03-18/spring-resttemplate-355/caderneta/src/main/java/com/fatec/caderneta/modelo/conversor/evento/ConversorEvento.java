package com.fatec.caderneta.modelo.conversor.evento;

import java.util.ArrayList;
import java.util.List;

import com.fatec.caderneta.modelo.conversor.usuario.ConversorUsuario;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.evento.dto.CalendarioDto;
import com.fatec.caderneta.modelo.evento.dto.EventoDto;
import com.fatec.caderneta.modelo.usuario.dto.UsuarioSimplesDto;

public class ConversorEvento {	
	public static EventoDto converter(Evento evento) {
		EventoDto dto = new EventoDto();
		dto.setNome(evento.getNome());
		dto.setIdentificador(evento.getIdentificador());
		CalendarioDto data = ConversorCalendario.converter(evento.getData());
		CalendarioDto dataCriacao = ConversorCalendario.converter(evento.getDataCriacao());
		dto.setData(data);
		dto.setDataCriacao(dataCriacao);
		UsuarioSimplesDto dono = ConversorUsuario.converterSimples(evento.getDono());
		dto.setDono(dono);
		for(Usuario usuario : evento.getParticipantes()) {
			UsuarioSimplesDto participante = ConversorUsuario.converterSimples(usuario);
			dto.getParticipantes().add(participante);
		}
		return dto;
	}

	public static List<EventoDto> converter(Iterable<Evento> eventos) {
		List<EventoDto> dtos = new ArrayList<>();
		for (Evento evento : eventos) {
			EventoDto dto = ConversorEvento.converter(evento);
			dtos.add(dto);
		}
		return dtos;
	}

}