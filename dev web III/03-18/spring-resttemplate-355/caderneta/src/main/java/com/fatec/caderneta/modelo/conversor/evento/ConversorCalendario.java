package com.fatec.caderneta.modelo.conversor.evento;

import java.time.LocalDateTime;

import com.fatec.caderneta.modelo.evento.dto.CalendarioDto;

public class ConversorCalendario {

	public static CalendarioDto converter(LocalDateTime data) {
		CalendarioDto dto = new CalendarioDto();
		Integer ano = data.getYear() ;
		Integer mes = data.getMonthValue();
		Integer dia = data.getDayOfMonth();
		Integer hora = data.getHour();
		Integer minuto = data.getMinute();
		dto.setAno(ano.toString());
		dto.setMes(mes.toString());
		dto.setDia(dia.toString());
		dto.setHora(hora.toString());
		dto.setMinuto(minuto.toString());
		return dto;
	}

}