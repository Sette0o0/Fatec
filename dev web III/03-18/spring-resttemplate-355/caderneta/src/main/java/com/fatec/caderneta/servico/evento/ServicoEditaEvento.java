package com.fatec.caderneta.servico.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.conversor.evento.ConversorEventoDto;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.EdicaoEventoDto;
import com.fatec.caderneta.repositorio.RepositorioEvento;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoEditaEvento {

	@Autowired
	private RepositorioEvento repositorio;
	
	public void editar(Evento original, EdicaoEventoDto dto) {
		Evento evento = ConversorEventoDto.converter(dto);
		original.setNome(evento.getNome());
		original.setData(evento.getData());
		repositorio.save(original);
	}
}