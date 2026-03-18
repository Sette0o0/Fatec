package com.fatec.caderneta.servico;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.dto.CalendarioDTO;

@Service
public class CalendarioServico {
	public LocalDateTime converterCalendario(CalendarioDTO calendario) {
		int ano = Integer.parseInt(calendario.getAno());
		int mes = Integer.parseInt(calendario.getMes());
		int dia = Integer.parseInt(calendario.getDia());
		int hora = Integer.parseInt(calendario.getHora());
		int minuto = Integer.parseInt(calendario.getMinuto());
		int segundo = Integer.parseInt(calendario.getSegundo());

		LocalDateTime dataEvento = LocalDateTime.of(ano, mes, dia, hora, minuto, segundo);
		return dataEvento;
	}
}