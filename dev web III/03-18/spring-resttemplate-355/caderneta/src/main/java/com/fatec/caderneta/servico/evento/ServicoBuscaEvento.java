package com.fatec.caderneta.servico.evento;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.repositorio.RepositorioEvento;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoBuscaEvento {

	@Autowired
	private RepositorioEvento repositorio;

	public Evento buscarPorIdentificador(String identificador) {
		Optional<Evento> evento = repositorio.buscarPorIdentificador(identificador);
		if(!evento.isPresent()) {
			throw new NoSuchElementException(
					"Evento não existe "
					+ "na base de dados para o identificador: " + identificador);
		}else {
			return evento.get();
		}
	}

	public Iterable<Evento> buscarTodos() {
		return repositorio.findAll();
	}
	
}