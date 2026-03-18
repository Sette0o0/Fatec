package com.fatec.caderneta.servico.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioEvento;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoExcluiEvento {
	
	@Autowired
	private RepositorioEvento repositorio;
	
	private void excluirParticipantes(Evento evento) {
		for(Usuario participante : evento.getParticipantes()) {
			participante.getEventosComoParticipante().remove(evento);
		}
		evento.getParticipantes().clear();
	}
	
	private void excluirDono(Evento evento) {
		Usuario dono = evento.getDono();
		dono.getEventosComoDono().remove(evento);
		evento.setDono(null);
	}
	
	public void excluir(Evento evento) {
		excluirParticipantes(evento);
		excluirDono(evento);
		repositorio.delete(evento);
	}
}