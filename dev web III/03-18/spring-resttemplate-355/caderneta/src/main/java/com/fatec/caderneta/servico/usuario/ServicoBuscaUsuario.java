package com.fatec.caderneta.servico.usuario;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoBuscaUsuario {
	@Autowired
	private RepositorioUsuario repositorio;

	public Usuario buscarPorEmail(String email) {
		Optional<Usuario> usuario = repositorio.buscarPorEmail(email);
		if(!usuario.isPresent()) {
			throw new NoSuchElementException(
					"Usuário não existe "
					+ "na base de dados para o e-mail: " + email);
		}
		return usuario.get();
	}

	public Iterable<Usuario> buscarTodos() {
		Iterable<Usuario> usuarios = repositorio.findAll();
		return usuarios;
	}
}