package com.fatec.caderneta.servico.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoIncluiAutoridade {

	@Autowired
	private RepositorioUsuario repositorio;

	public void incluir(Usuario usuario, Autoridade autoridade) {
		usuario.getAutoridades().add(autoridade);
		repositorio.save(usuario);
	}
}