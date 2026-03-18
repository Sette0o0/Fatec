package com.fatec.caderneta.servico.usuario;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Usuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoValidaSenha {
	
	@Autowired
	private PasswordEncoder encoder;

	public void validar(Usuario usuario, String senhaAntiga) {
		if(!encoder.matches(senhaAntiga, usuario.getSenha())) {
			throw new NoSuchElementException(
					"A senha: " + senhaAntiga + " "
					+ "não pertence ao usuário: " + usuario.getNome()
			);
		}
	}
}