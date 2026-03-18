package com.fatec.caderneta.modelo.usuario.dto;

import java.util.ArrayList;
import java.util.List;

import com.fatec.caderneta.modelo.evento.dto.EventoDto;

import lombok.Data;

@Data
public class UsuarioDto {
	private String nome;
	private String email;
	private List<String> autoridades = new ArrayList<>();

	private List<EventoDto> eventosComoDono = new ArrayList<>();
	private List<EventoDto> eventosComoParticipante = new ArrayList<>();
}