package com.fatec.caderneta.servico.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoEditaNome {

	@Autowired
	private RepositorioUsuario repositorio;

	public void editar(Usuario usuario, String nome) {
		usuario.setNome(nome);
		repositorio.save(usuario);
	}
}
