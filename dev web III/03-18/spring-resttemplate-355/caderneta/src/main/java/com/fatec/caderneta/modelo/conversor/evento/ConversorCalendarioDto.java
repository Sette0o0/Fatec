package com.fatec.caderneta.modelo.conversor.evento;

import java.time.LocalDateTime;

import com.fatec.caderneta.modelo.evento.dto.CalendarioDto;

public class ConversorCalendarioDto {

	public static LocalDateTime converter(CalendarioDto calendario) {
		int ano = Integer.parseInt(calendario.getAno());
		int mes = Integer.parseInt(calendario.getMes());
		int dia = Integer.parseInt(calendario.getDia());
		int hora = Integer.parseInt(calendario.getHora());
		int minuto = Integer.parseInt(calendario.getMinuto());
		LocalDateTime dataEvento = LocalDateTime.of(ano, mes, dia, hora, minuto);
		return dataEvento;
	}

}