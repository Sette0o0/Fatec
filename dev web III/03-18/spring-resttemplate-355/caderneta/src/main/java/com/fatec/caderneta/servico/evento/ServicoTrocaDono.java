package com.fatec.caderneta.servico.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioEvento;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoTrocaDono {

	@Autowired
	private RepositorioEvento repositorioEvento;

	public void trocar(Evento evento, Usuario novoDono) {
		Usuario antigoDono = evento.getDono();
		antigoDono.getEventosComoDono().remove(evento);
		evento.setDono(novoDono);
		novoDono.getEventosComoDono().add(evento);
		evento.getParticipantes().remove(novoDono);
		novoDono.getEventosComoParticipante().remove(evento);
		repositorioEvento.save(evento);
	}
}
