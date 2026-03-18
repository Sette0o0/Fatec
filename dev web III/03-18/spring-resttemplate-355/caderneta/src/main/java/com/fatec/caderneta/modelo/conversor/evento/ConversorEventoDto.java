package com.fatec.caderneta.modelo.conversor.evento;

import java.time.LocalDateTime;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.CriacaoEventoDto;
import com.fatec.caderneta.modelo.evento.dto.EdicaoEventoDto;

public class ConversorEventoDto {
	
	public static Evento converter(CriacaoEventoDto dto) {
		LocalDateTime data = ConversorCalendarioDto
				.converter(dto.getData());
		Evento evento = new Evento();
		evento.setNome(dto.getNome());
		evento.setData(data);
		return evento;
	}

	public static Evento converter(EdicaoEventoDto dto) {
		LocalDateTime data = ConversorCalendarioDto
				.converter(dto.getData());
		Evento evento = new Evento();
		evento.setNome(dto.getNome());
		evento.setData(data);
		return evento;
	}
	
}