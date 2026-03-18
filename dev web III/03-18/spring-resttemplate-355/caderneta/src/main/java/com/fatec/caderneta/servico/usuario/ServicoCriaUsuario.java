package com.fatec.caderneta.servico.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoCriaUsuario {
	@Autowired
	private RepositorioUsuario repositorio;
	@Autowired
	private PasswordEncoder encoder;

	public void criarUsuario(Usuario usuario) {
		usuario.setSenha(encoder.encode(usuario.getSenha()));
		repositorio.save(usuario);
	}
}