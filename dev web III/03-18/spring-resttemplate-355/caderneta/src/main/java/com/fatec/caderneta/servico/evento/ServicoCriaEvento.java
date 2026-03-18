package com.fatec.caderneta.servico.evento;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioEvento;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoCriaEvento {
	
	@Autowired
	private RepositorioUsuario repositorioUsuario;

	@Autowired
	private RepositorioEvento repositorioEvento;

	public void criar(Evento evento, String email) {
		Optional<Usuario> dono = repositorioUsuario
				.buscarPorEmail(email);
		if(!dono.isPresent()) {
			throw new NoSuchElementException(
					"Usuário não existe "
					+ "na base de dados para o e-mail: " + email);
		}
		evento.setDono(dono.get());
		evento.setDataCriacao(LocalDateTime.now());
		repositorioEvento.save(evento);
	}
}