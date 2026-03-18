package com.fatec.caderneta.servico.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoExcluirAutoridade {
	
	@Autowired
	private RepositorioUsuario repositorio;
	
	public void excluir(Usuario usuario, Autoridade autoridade) {
		usuario.getAutoridades().remove(autoridade);
		repositorio.save(usuario);
	}
}