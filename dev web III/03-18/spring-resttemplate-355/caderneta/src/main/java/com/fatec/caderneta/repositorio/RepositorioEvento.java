package com.fatec.caderneta.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fatec.caderneta.modelo.entidade.Evento;

public interface RepositorioEvento extends CrudRepository<Evento, Long> {
	
	@Query("SELECT e FROM Evento e WHERE e.identificador = :identificador")
	Optional<Evento> buscarPorIdentificador(@Param("identificador") String identificador);

}