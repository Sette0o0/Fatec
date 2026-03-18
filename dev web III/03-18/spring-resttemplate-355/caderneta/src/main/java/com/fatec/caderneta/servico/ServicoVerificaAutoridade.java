package com.fatec.caderneta.servico;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Usuario;

@Service
public class ServicoVerificaAutoridade {

	public void naoExisteAutoridade(Usuario usuario, Autoridade autoridade) {
		if(!usuario.getAutoridades().contains(autoridade)){
			throw new NoSuchElementException(
					"O usuário: " + usuario.getEmail() + " não possui a " +
					"autoridade: " + autoridade
			);
		}
	}
	
	public void existeAutoridade(Usuario usuario, Autoridade autoridade) {
		if(usuario.getAutoridades().contains(autoridade)){
			throw new NoSuchElementException(
					"O usuário: " + usuario.getEmail() + " já possui a " +
					"autoridade: " + autoridade
			);
		}
	}
}