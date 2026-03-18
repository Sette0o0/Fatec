package com.fatec.caderneta.servico;

import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Autoridade;

@Service
public class ServicoBuscaAutoridade {

	public Autoridade buscar(String autoridade) {
		Autoridade autoridadeEncontrada = Autoridade.valueOf(autoridade);
		return autoridadeEncontrada;
	}
}