package com.fatec.caderneta.servico.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoEditaSenha {

	@Autowired
	private RepositorioUsuario repositorio;
	
	@Autowired
	private PasswordEncoder encoder;

	public void editar(Usuario usuario, String senhaNova) {
		usuario.setSenha(encoder.encode(senhaNova));
		repositorio.save(usuario);
	}
}