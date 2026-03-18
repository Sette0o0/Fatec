package com.fatec.caderneta.repositorio;

import org.springframework.data.repository.CrudRepository;

import com.fatec.caderneta.modelo.entidade.Evento;

public interface EventoRepositorio extends CrudRepository<Evento, Long> {}