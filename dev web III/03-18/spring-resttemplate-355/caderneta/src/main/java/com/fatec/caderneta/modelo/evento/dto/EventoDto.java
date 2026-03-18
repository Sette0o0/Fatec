package com.fatec.caderneta.modelo.evento.dto;

import java.util.ArrayList;
import java.util.List;

import com.fatec.caderneta.modelo.usuario.dto.UsuarioSimplesDto;

import lombok.Data;

@Data
public class EventoDto {
	private String nome;
	private String identificador;
	private CalendarioDto data;
	private CalendarioDto dataCriacao;
	private UsuarioSimplesDto dono;
	private List<UsuarioSimplesDto> participantes = new ArrayList<>();
}